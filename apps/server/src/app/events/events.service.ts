import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { EventsEntity } from './events.entity';

@Injectable()
export class EventsService {
  constructor(
    @InjectRepository(EventsEntity)
    private readonly eventsRepository: Repository<EventsEntity>
  ) {
  }

  async getAllEvents(): Promise<EventsEntity[]> {
    return await this.eventsRepository.find();
  }

  async getEventById(id: number): Promise<EventsEntity | undefined> {
    return await this.eventsRepository.findOne({
      where: {
        id
      }
    });
  }

  async createEvent(event: EventsEntity): Promise<EventsEntity> {
    return await this.eventsRepository.save(event);
  }

  async updateEvent(id: number, updatedEvent: Partial<EventsEntity>): Promise<EventsEntity | undefined> {
    await this.eventsRepository.update({ id }, updatedEvent); // Pass criteria as an object
    return await this.eventsRepository.findOne({
      where: {
        id
      }
    });
  }

  async deleteEvent(id: number): Promise<void> {
    await this.eventsRepository.delete(id);
  }
}
