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
    this.eventsService.getEvents().subscribe(({ result }) => {
      this.events = result;
    });
  }

  // filterEvents(eventTypeId: number): Events[] {
  //   return [];
  // }
}
