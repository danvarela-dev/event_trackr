import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EventsService } from './events.service';
import { EventsController } from './events.controller';
import { EventsEntity } from '../../entities/events.entity';

@Module({
  imports: [TypeOrmModule.forFeature([EventsEntity])],
  controllers: [EventsController],
  providers: [EventsService],
})
export class EventsModule {}
