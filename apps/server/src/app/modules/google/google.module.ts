import { Module } from '@nestjs/common';
import { GoogleCalendarService } from './google-calendar.service';

@Module({
  providers: [GoogleCalendarService],
})
export class GoogleModule {}
