/* eslint-disable @nx/enforce-module-boundaries */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  Body,
  Controller,
  Delete,
  Get,
  Patch,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { EventsService } from './events.service';
import { ApiTags } from '@nestjs/swagger';
import { Events } from 'apps/shared/models/events.interface';

@ApiTags('Events')
@Controller('events')
export class EventsController {
  constructor(private eventsService: EventsService) {}

  @Get()
  async getAllEvents() {
    console.log('getevents');
    return await this.eventsService.getAllEvents();
  }

  @Get(':id')
  async getEventById(id: number) {
    return await this.eventsService.getEventById(id);
  }

  @Post()
  async createEvent(@Body() event: any) {
    return await this.eventsService.createEvent(event.event);
  }

  @Patch()
  async updateEvent(@Query() id: any, @Body() updatedEvent: Events) {
    return await this.eventsService.updateEvent(id.id, updatedEvent);
  }

  @Delete(':id')
  async deleteEvent(id: number) {
    return await this.eventsService.deleteEvent(id);
  }
}
