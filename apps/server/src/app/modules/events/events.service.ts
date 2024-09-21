/* eslint-disable @nx/enforce-module-boundaries */
import { Events } from '@event-trackr/shared';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { EventsEntity } from '../../entities/events.entity';

@Injectable()
export class EventsService {
  constructor(
    @InjectRepository(EventsEntity)
    private readonly eventsRepository: Repository<EventsEntity>,
  ) {}

  async getAllEvents(): Promise<EventsEntity[]> {
    return await this.eventsRepository.find({
      relations: ['category', 'createdBy', 'updatedBy'],
    });
  }

  async getEventById(id: number): Promise<EventsEntity | undefined> {
    return await this.eventsRepository.findOne({
      where: {
        id,
      },
    });
  }

  async createEvent(event: Events): Promise<boolean> {
    try {
      event = {
        ...event,
        startDate: new Date(event.startDate),
        ...(event.endDate ? { end_date: new Date(event.endDate) } : {}),
      };

      await this.eventsRepository.save(event);
      return true;
    } catch (error) {
      return false;
    }
  }

  async updateEvent(
    id: number,
    updatedEvent: Partial<Events>,
  ): Promise<EventsEntity | undefined> {
    try {
      await this.eventsRepository.update({ id }, updatedEvent); // Pass criteria as an object
      return await this.eventsRepository.findOne({
        where: {
          id,
        },
      });
    } catch (error) {
      return undefined;
    }
  }

  async deleteEvent(id: number): Promise<boolean> {
    try {
      const deletedEvent = await this.eventsRepository.delete(id);
      if (!deletedEvent) return false;

      return true;
    } catch (error) {
      console.error(error);
      return false;
    }
  }
}
