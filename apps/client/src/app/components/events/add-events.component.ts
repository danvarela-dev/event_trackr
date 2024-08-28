/* eslint-disable @nx/enforce-module-boundaries */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Component, OnInit } from '@angular/core';
import { NgIf, NgStyle } from '@angular/common';
import { DropdownModule } from 'primeng/dropdown';
import { CategoriesService } from '../../services/categories/categories.service';
import { InputTextModule } from 'primeng/inputtext';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { ButtonModule } from 'primeng/button';
import { EventsService } from '../../services/events/events.service';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { CalendarModule } from 'primeng/calendar';
import { ToastModule } from 'primeng/toast';
import { Category, Events } from '@event-trackr/shared';
import { FloatLabelModule } from 'primeng/floatlabel';
import { FileUploadEvent, FileUploadModule } from 'primeng/fileupload';
import { InputNumberModule } from 'primeng/inputnumber';
import { SelectButtonModule } from 'primeng/selectbutton';
import { MessageService } from 'primeng/api';
import { catchError } from 'rxjs';
import { EventInput } from '@fullcalendar/core';

@Component({
  selector: 'event-trackr-events',
  standalone: true,
  imports: [
    NgIf,
    NgStyle,
    DropdownModule,
    InputTextModule,
    FormsModule,
    InputTextareaModule,
    ButtonModule,
    CalendarModule,
    ToastModule,
    FloatLabelModule,
    FileUploadModule,
    ReactiveFormsModule,
    InputNumberModule,
    SelectButtonModule,
  ],
  templateUrl: './add-events.component.html',
  styleUrl: './add-events.component.scss',
  providers: [CategoriesService],
})
export class AddEventsComponent implements OnInit {
  categories: Category[] = [];
  event: EventInput;
  editEvent: boolean;
  uploadedFiles: any[] = [];
  frequencies = [
    {
      label: 'Anualmente',
      value: 'YEARLY',
    },

    {
      label: 'Mensualmente',
      value: 'MONTHLY',
    },

    {
      label: 'Semanalmente',
      value: 'WEEKLY',
    },
    {
      label: 'Diariamente',
      value: 'DAILY',
    },
    {
      label: 'Una vez',
      value: 'ONCE',
    },
  ];

  frequencyTypes = [
    {
      label: 'Numero de veces',
      value: 'COUNT',
    },
    {
      label: 'Hasta una fecha',
      value: 'UNTIL',
    },
  ];

  frequencyTypeControl = new FormControl('COUNT');

  formGroup: FormGroup;

  constructor(
    private categoriesService: CategoriesService,
    private eventsService: EventsService,
    public dialogData: DynamicDialogConfig,
    private dialogRef: DynamicDialogRef,
    private formBuilder: FormBuilder,
    private messageService: MessageService,
  ) {}

  initForm() {
    this.formGroup = this.formBuilder.group({
      name: [null, [Validators.required]],
      category: [null, Validators.required],
      notes: [null, Validators.maxLength(255)],
      source: ['Google Calendar'],
      date: [null],
      frequency: [null, Validators.required],
      occurrences: [null],
      endDate: [null],
    });
  }

  ngOnInit(): void {
    this.getCategories();
    this.initForm();
    const { eventData, edit_event } = this.dialogData.data;
    this.editEvent = edit_event;
    if (this.editEvent) {
      this.event = eventData.event;
    } else {
      this.event = eventData;
    }

    if (edit_event) {
      const { event } = eventData.event._def.extendedProps;
      const selectedFrequency =
        this.frequencies.find(({ value }) => value === event.frequency) ?? null;

      this.formGroup.patchValue({
        name: event.name,
        category: event.category,
        notes: event.notes,
        source: event.source,
        date: new Date(event.startDate),
        frequency: selectedFrequency,
        occurrences: event.occurrences,
        endDate: new Date(event.endDate),
      });

      this.frequencyTypeControl.setValue(event.occurrences ? 'COUNT' : 'UNTIL');
    }
  }

  getCategories() {
    this.categoriesService.getCategories().subscribe((categories: any) => {
      this.categories = categories.result;
    });
  }

  onUpload(event: FileUploadEvent) {
    for (const file of event.files) {
      this.uploadedFiles.push(file);
    }
  }

  saveEvent() {
    const { name, category, notes, source, endDate, occurrences, frequency } =
      this.formGroup.value;

    const currentUser = JSON.parse(sessionStorage.getItem('user') || '{}');

    const add_event = {
      name,
      startDate: this.event.date as Date,
      category,
      notes,
      source,
      endDate,
      occurrences,
      frequency: frequency.value,
      createdBy: currentUser,
    };

    this.eventsService
      .postEvent(add_event)
      .pipe(
        catchError(err => {
          this.messageService.add({
            severity: 'error',
            summary: 'Error',
            detail: 'Error al guardar el evento',
          });

          this.dialogRef.close({
            success: false,
          });

          return err;
        }),
      )
      .subscribe(() => {
        this.dialogRef.close({
          success: true,
        });
        this.messageService.add({
          severity: 'success',
          summary: 'Exito',
          detail: 'Evento agregado exitosamente',
        });
      });
  }

  updateEvent() {
    const {
      name,
      date: startDate,
      category,
      notes,
      source,
      endDate,
      occurrences,
      frequency,
    } = this.formGroup.value;
    const currentUser = JSON.parse(sessionStorage.getItem('user') || '{}');

    const update_event: Events = {
      name,
      startDate,
      category,
      notes,
      source,
      endDate,
      occurrences,
      frequency: frequency.value,
      updatedBy: currentUser,
    };

    const { db_id } = this.event.extendedProps as any;

    if (update_event) {
      this.eventsService
        .patchEvent(db_id, update_event)
        .pipe(
          catchError(err => {
            this.messageService.add({
              severity: 'error',
              summary: 'Error',
              detail: 'Error al actualizar el evento',
            });

            this.dialogRef.close({
              success: false,
            });

            return err;
          }),
        )
        .subscribe(() => {
          this.messageService.add({
            severity: 'success',
            summary: 'Exito',
            detail: 'Evento actualizado exitosamente',
          });

          this.dialogRef.close({
            success: true,
          });
        });
    }
  }
}
