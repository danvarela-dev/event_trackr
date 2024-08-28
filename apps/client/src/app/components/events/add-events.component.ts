/* eslint-disable @nx/enforce-module-boundaries */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Component, OnInit } from '@angular/core';
import { NgIf } from '@angular/common';
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
import { ShareDataService } from '../../services/data/share-data.service';
import { Category } from '@event-trackr/shared';
import { FloatLabelModule } from 'primeng/floatlabel';
import { FileUploadEvent, FileUploadModule } from 'primeng/fileupload';
import { InputNumberModule } from 'primeng/inputnumber';
import { SelectButtonModule } from 'primeng/selectbutton';

@Component({
  selector: 'event-trackr-events',
  standalone: true,
  imports: [
    NgIf,
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
  event: any;
  edit_event: boolean;
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
    private shareDataService: ShareDataService,
    private formBuilder: FormBuilder,
  ) {}

  initForm() {
    this.formGroup = this.formBuilder.group({
      name: [null, [Validators.required]],
      category: [null, Validators.required],
      notes: [null, Validators.required],
      source: [null, Validators.required],
      date: [null],
      frequency: [null, Validators.required],
      occurrences: [null],
      endDate: [null],
    });
  }

  ngOnInit(): void {
    this.getCategories();
    this.initForm();
    this.event = this.dialogData.data.event;
    this.edit_event = this.dialogData.data.edit_event;

    if (this.edit_event) {
      const { notes, date, source, category, title } =
        this.event.event._def.extendedProps;

      this.formGroup.patchValue({
        name: title,
        notes,
        date,
        source,
        category,
      });
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
      startDate: this.event.date,
      category,
      notes,
      source,
      endDate,
      occurrences,
      frequency: frequency.value,
      createdBy: currentUser,
    };

    this.eventsService.postEvent(add_event).subscribe((res: any) => {
      this.dialogRef.close();
      this.shareDataService.sendData(res.statusCode === 201);
    });
  }

  updateEvent() {
    // const { name, date, category, notes, source } = this.formGroup.value;
    // const update_event: Events = {
    //   name,
    //   event_date: date,
    //   category,
    //   notes,
    //   source,
    // };
    // if (update_event) {
    //   this.eventsService
    //     .patchEvent(this.event.event._def.extendedProps.db_id, update_event)
    //     .subscribe((res: any) => {
    //       this.dialogRef.close();
    //       this.shareDataService.sendData(res.statusCode === 200);
    //     });
    // }
  }
}
