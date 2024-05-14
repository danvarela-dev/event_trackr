/* eslint-disable @typescript-eslint/no-explicit-any */
import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import {
  FullCalendarComponent,
  FullCalendarModule,
} from '@fullcalendar/angular';
import { CalendarOptions } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { EventsComponent } from '../events/events.component';
import { EventsService } from '../../services/events/events.service';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { ShareDataService } from '../../services/data/share-data.service';
import { Subscription } from 'rxjs';
import esLocale from '@fullcalendar/core/locales/es-us';
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
    plugins: [dayGridPlugin, interactionPlugin],
    dateClick: this.addEvent.bind(this),
    eventClick: this.editEvent.bind(this),
    displayEventTime: false,
    eventBackgroundColor: '#1801C2',
    eventDisplay: 'block',
    locale: esLocale,
    dayMaxEvents: 3,
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

  addEvent(event: any) {
    console.log('event in home', event);
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

  editEvent(event: any) {
    this.ref = this.dialogService.open(EventsComponent, {
      header: 'Modificar Evento',
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
      this.events = res.result;
      console.log(this.events);
      if (this.events) {
        this.calendarOptions = {
          ...this.calendarOptions,
          events: [
            ...this.events.map(event => ({
              title: this.assignIcon(event.category.id).icon + event.name,
              date: event.event_date,
              color: this.assignIcon(event.category.id).color,
              db_id: event.id,
              category: event.category,
              notes: event.notes,
            })),
          ],
        };
      }
    });
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(s => s.unsubscribe());
  }
}
