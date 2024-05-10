/* eslint-disable @nx/enforce-module-boundaries */
import { Events } from '@event-trackr/shared';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { EventsEntity } from './events.entity';

@Injectable()
export class EventsService {
  constructor(
    @InjectRepository(EventsEntity)
    private readonly eventsRepository: Repository<EventsEntity>,
  ) {}

  async getAllEvents(): Promise<EventsEntity[]> {
    return await this.eventsRepository.find({
      relations: ['category'],
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
      const new_event = new EventsEntity();
      new_event.name = event.name;
      new_event.category = event.category;
      new_event.event_date = event.event_date;
      new_event.notes = event.notes;
      await this.eventsRepository.save(new_event);
      return true;
    } catch (error) {
      console.error(error);
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
      console.log(error);
      return undefined;
    }
  }

  async deleteEvent(id: number): Promise<void> {
    await this.eventsRepository.delete(id);
  }
}
