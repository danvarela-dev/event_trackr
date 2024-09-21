import {
  Body,
  Controller,
  Delete,
  Get,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { EventsService } from './events.service';
import { ApiTags } from '@nestjs/swagger';
import { Events } from '@event-trackr/shared';

@ApiTags('Events')
@Controller('events')
export class EventsController {
  constructor(private eventsService: EventsService) {}

  @Get(':time')
  async getAllEvents() {
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
  async updateEvent(
    @Query() id: Record<string, number>,
    @Body() updatedEvent: Events,
  ) {
    return await this.eventsService.updateEvent(id.id, updatedEvent);
  }

  @Delete('delete')
  async deleteEvent(@Query('id') id: number) {
    return await this.eventsService.deleteEvent(id);
  }
}
