import { Controller, Delete, Get, Injectable, Post, Put } from "@nestjs/common";
import { EventsService } from "./events.service";
import { ApiTags } from "@nestjs/swagger";

@ApiTags('Events')
@Controller('events')
export class EventsController {
  constructor(private eventsService: EventsService) {
  }

  @Get()
  async getAllEvents() {
    return await this.eventsService.getAllEvents();
  }

  @Get(':id')
  async getEventById(id: number) {
    return await this.eventsService.getEventById(id);
  }

  @Post()
  async createEvent(event) {
    return await this.eventsService.createEvent(event);
  }

  @Put(':id')
  async updateEvent(id: number, updatedEvent) {
    return await this.eventsService.updateEvent(id, updatedEvent);
  }

  @Delete(':id')
  async deleteEvent(id: number) {
    return await this.eventsService.deleteEvent(id);
  }
}
