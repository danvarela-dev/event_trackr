import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EventsEntity } from './events.entity';
import { EventsService } from "./events.service";
import { EventsController } from "./events.controller";

@Module({
  imports: [TypeOrmModule.forFeature([EventsEntity])],
  controllers: [EventsController],
  providers: [EventsService],
})
export class EventsModule {}
