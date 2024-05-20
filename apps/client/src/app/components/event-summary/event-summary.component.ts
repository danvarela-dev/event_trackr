/* eslint-disable @typescript-eslint/no-explicit-any */
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventsService } from '../../services/events/events.service';
import { Events } from '@event-trackr/shared';
import { ButtonModule } from 'primeng/button';
import { AccordionModule } from 'primeng/accordion';
import { TableModule } from 'primeng/table';

@Component({
  selector: 'event-trackr-event-summary',
  standalone: true,
  imports: [CommonModule, AccordionModule, ButtonModule, TableModule],
  templateUrl: './event-summary.component.html',
  styleUrl: './event-summary.component.scss',
  providers: [EventsService],
})
export class EventSummaryComponent implements OnInit {
  events: Events[];
  eventTypes = [
    {
      id: 1,
      type: 'Hoy',
    },
    {
      id: 2,
      type: 'Proximos',
    },
    {
      id: 3,
      type: 'Pasados',
    },
  ];

  constructor(private eventsService: EventsService) {}

  ngOnInit(): void {
    this.getEvents();
  }

  getEvents() {
    this.eventsService.getEvents().subscribe((event: any) => {
      this.events = event.result;
      this.classifyEvents(this.events);
      console.log(this.events);
    });
  }

  filterEvents(eventTypeId: number): Events[] {
    return this.events.filter(event => event.eventType === eventTypeId);
  }

  getEventCount(eventTypeId: number): number {
    if (this.events) {
      return this.events.filter(event => event.eventType === eventTypeId)
        .length;
    } else {
      return 0;
    }
  }

  classifyEvents(events: Events[]) {
    const today = new Date();
    const currentDate =
      today.getFullYear() +
      '-' +
      (today.getMonth() + 1).toString().padStart(2, '0') +
      '-' +
      today.getDate().toString().padStart(2, '0');
    const weekLater = new Date();
    weekLater.setDate(weekLater.getDate() + 7);
    const weekLaterDate = weekLater.toISOString().split('T')[0];

    for (const event of events) {
      const eventDate = new Date(event.event_date).toISOString().split('T')[0];

      if (eventDate === currentDate) {
        event.eventType = 1;
      } else if (eventDate > currentDate && eventDate <= weekLaterDate) {
        event.eventType = 2;
      } else {
        event.eventType = 3;
      }
    }

    console.log(events);
  }
}
