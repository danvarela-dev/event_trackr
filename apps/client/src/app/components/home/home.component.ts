/* eslint-disable @typescript-eslint/no-explicit-any */
import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import {
  FullCalendarComponent,
  FullCalendarModule,
} from '@fullcalendar/angular';
import { CalendarOptions, EventInput } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import rrulePlugin from '@fullcalendar/rrule';
import interactionPlugin from '@fullcalendar/interaction';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { EventsComponent } from '../events/events.component';
import { EventsService } from '../../services/events/events.service';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { ShareDataService } from '../../services/data/share-data.service';
import esLocale from '@fullcalendar/core/locales/es-us';
import { Subscription } from 'rxjs';
import { CommonModule } from '@angular/common';
import { Events } from '@event-trackr/shared';

@Component({
  selector: 'event-trackr-home',
  standalone: true,
  imports: [CommonModule, FullCalendarModule, ToastModule],
  providers: [DialogService, MessageService],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit, OnDestroy {
  @ViewChild(FullCalendarComponent) calendarComponent: FullCalendarComponent;
  calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth',
    plugins: [dayGridPlugin, interactionPlugin, rrulePlugin],
    dateClick: this.addEvent.bind(this),
    eventClick: this.editEvent.bind(this),
    displayEventTime: false,
    eventBackgroundColor: '#1801C2',
    eventDisplay: 'block',
    locale: esLocale,
    dayMaxEvents: 3,
    height: '80vh',
  };

  events: Events[];
  event_success: boolean | null;
  subscriptions: Subscription[] = [];

  constructor(
    private dialogService: DialogService,
    private shareDataService: ShareDataService,
    private messageService: MessageService,
    private eventsService: EventsService,
  ) {
    this.shareDataService.data$.subscribe(data => {
      this.event_success = data;
    });
  }

  ref: DynamicDialogRef | undefined;

  ngOnInit(): void {
    this.getEvents();
  }

  addEvent(event: EventInput) {
    this.ref = this.dialogService.open(EventsComponent, {
      header: 'Crear Nuevo Evento',
      width: '50%',
      modal: true,
      data: {
        event: event,
        edit_event: false,
      },
    });

    this.ref.onClose.subscribe(() => {
      setTimeout(() => {
        if (this.event_success === false) {
          this.messageService.add({
            severity: 'error',
            summary: 'Error',
            detail: 'No se pudo crear el Evento',
          });
        } else if (this.event_success === true) {
          this.messageService.add({
            severity: 'success',
            summary: 'Exito',
            detail: 'Evento creado correctamente',
          });
          this.getEvents();
          this.calendarComponent.getApi().refetchEvents();
        }
      }, 100);
    });
  }

  editEvent(event: EventInput) {
    this.ref = this.dialogService.open(EventsComponent, {
      header: 'Modificar Eventos',
      width: '50%',
      modal: true,
      data: {
        event: event,
        edit_event: true,
      },
    });

    this.ref.onClose.subscribe(() => {
      setTimeout(() => {
        if (this.event_success === false) {
          this.messageService.add({
            severity: 'error',
            summary: 'Error',
            detail: 'No se pudo actualizar el Evento',
          });
        } else if (this.event_success === true) {
          this.messageService.add({
            severity: 'success',
            summary: 'Exito',
            detail: 'Evento actualizado correctamente',
          });
          this.getEvents();
          this.calendarComponent.getApi().refetchEvents();
        }
      }, 100);
    });
  }

  getEvents() {
    this.eventsService.getEvents().subscribe((res: any) => {
      this.events = this.processEvents(res.result);
      console.log(this.events);
      if (this.events) {
        this.calendarOptions = {
          ...this.calendarOptions,
          events: [
            ...this.events.map(event => ({
              title: event.category.icon + event.name,
              date: event.event_date,
              color: event.category.color,
              db_id: event.id,
              category: event.category,
              notes: event.notes,
              source: event.source,
              recursion: event.recursion,
              recursionUnit: event.recursion_unit,
              rrule: event.rrule,
            })),
          ],
        };
      }
    });
  }

  processEvents(events: Events[]) {
    const finalEvents: Events[] = [];

    events.forEach(event => {
      const originalDate = new Date(event.event_date);

      let rruleString;
      if (event.recursion.id === 1) {
        rruleString = `DTSTART:${
          originalDate.toISOString().replace(/[-:]/g, '').split('.')[0]
        }Z\nRRULE:FREQ=MONTHLY;COUNT=${event.recursion_unit}`;
      } else if (event.recursion.id === 2) {
        rruleString = `DTSTART:${
          originalDate.toISOString().replace(/[-:]/g, '').split('.')[0]
        }Z\nRRULE:FREQ=YEARLY;COUNT=${event.recursion_unit}`;
      }

      finalEvents.push({
        id: event.id,
        name: event.name,
        category: event.category,
        event_date: event.event_date,
        notes: event.notes,
        eventType: event.eventType,
        source: event.source,
        recursion: event.recursion,
        recursion_unit: event.recursion_unit,
        rrule: rruleString,
      });
    });

    return finalEvents;
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(s => s.unsubscribe());
  }
}
