import { Component, OnInit, ViewChild } from '@angular/core';
import {
  FullCalendarComponent,
  FullCalendarModule,
} from '@fullcalendar/angular';
import { CalendarOptions, EventInput } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { AddEventsComponent } from '../events/add-events.component';
import { EventsService } from '../../services/events/events.service';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { ShareDataService } from '../../services/data/share-data.service';
import esLocale from '@fullcalendar/core/locales/es-us';
import { CommonModule } from '@angular/common';
import { Events } from '@event-trackr/shared';
import { map, Observable } from 'rxjs';
import { ProgressSpinnerModule } from 'primeng/progressspinner';

@Component({
  selector: 'event-trackr-home',
  standalone: true,
  imports: [
    CommonModule,
    FullCalendarModule,
    ToastModule,
    ProgressSpinnerModule,
  ],
  providers: [DialogService, MessageService],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  @ViewChild(FullCalendarComponent) calendarComponent: FullCalendarComponent;
  calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth',
    plugins: [dayGridPlugin, interactionPlugin],
    dateClick: this.addEvent.bind(this),
    eventClick: this.editEvent.bind(this),
    displayEventTime: false,
    eventBackgroundColor: '#1801C2',
    eventDisplay: 'block',
    locale: esLocale,
    dayMaxEvents: 3,
    height: 'calc(100vh - 124px)',
  };

  events$: Observable<Events[]>;
  event_success: boolean | null;

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

  assignIcon(category: number) {
    return category === 1
      ? { icon: '🎂 ', color: '#90EE90' }
      : category === 2
      ? { icon: '👪 ', color: '#FFA500' }
      : category === 3
      ? { icon: '👓 ', color: '#9370DB' }
      : category === 4
      ? { icon: '❔ ', color: '#808080' }
      : { icon: '', color: '' };
  }

  addEvent(event: EventInput) {
    this.ref = this.dialogService.open(AddEventsComponent, {
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
        if (!this.event_success) {
          this.messageService.add({
            severity: 'error',
            summary: 'Error',
            detail: 'No se pudo crear el Evento',
          });
        } else {
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
    this.ref = this.dialogService.open(AddEventsComponent, {
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
        if (!this.event_success) {
          this.messageService.add({
            severity: 'error',
            summary: 'Error',
            detail: 'No se pudo actualizar el Evento',
          });
        } else {
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
    this.events$ = this.eventsService.getEvents().pipe(
      map(({ result }) => {
        const events = result;
        if (events) {
          this.calendarOptions = {
            ...this.calendarOptions,
            events: [
              ...this.getExpandedEvent(events).map(event => ({
                title: this.assignIcon(event.category.id).icon + event.name,
                date: event.startDate,
                color: event.category.color,
                db_id: event.id,
                category: event.category,
                notes: event.notes,
                source: event.source,
              })),
            ],
          };
        }

        return events;
      }),
    );
  }

  getExpandedEvent(event: Events[]): Events[] {
    return event.flatMap(item => {
      const expandedEvents = [];
      const newDate = new Date(item.startDate);

      const incrementDate = (frequency: string | undefined) => {
        switch (frequency) {
          case 'DAILY':
            newDate.setDate(newDate.getDate() + 1);
            break;
          case 'WEEKLY':
            newDate.setDate(newDate.getDate() + 7);
            break;
          case 'MONTHLY':
            newDate.setMonth(newDate.getMonth() + 1);
            break;
          case 'YEARLY':
            newDate.setFullYear(newDate.getFullYear() + 1);
            break;
        }
      };

      const addEvent = () => {
        expandedEvents.push({
          ...item,
          startDate: new Date(newDate),
        });
      };

      if (item.occurrences) {
        for (let i = 0; i < item.occurrences; i++) {
          addEvent();
          incrementDate(item.frequency);
        }
      } else if (item.endDate) {
        const endDate = new Date(item.endDate);
        while (newDate <= endDate) {
          addEvent();
          incrementDate(item.frequency);
        }
      } else {
        expandedEvents.push(item);
      }

      return expandedEvents;
    });
  }
}
