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
import { finalize, Subscription } from 'rxjs';
import { Events } from 'shared/src/lib/models/events.interface';
import { CommonModule } from '@angular/common';

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
    console.log('sss');
    this.getEvents();
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
    this.ref = this.dialogService.open(EventsComponent, {
      header: 'Crear Nuevo Evento',
      width: '50%',
      modal: true,
      data: {
        event: event,
        edit_event: false,
      },
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
      console.log(this.event_success);
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
    });
  }

  getEvents() {
    this.eventsService
      .getEvents()
      .pipe(
        finalize(() => {
          console.log('request ended');
        }),
      )
      .subscribe((res: any) => {
        this.events = res.result;
      });
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(s => s.unsubscribe());
  }
}
