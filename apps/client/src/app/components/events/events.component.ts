/* eslint-disable @nx/enforce-module-boundaries */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Category } from '../../../../../../shared/src/lib/models/category.interface';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DropdownModule } from 'primeng/dropdown';
import { CategoriesService } from '../../services/categories/categories.service';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { ButtonModule } from 'primeng/button';
import { Events } from 'shared/src/lib/models/events.interface';
import { EventsService } from '../../services/events/events.service';
import {
  DynamicDialogConfig,
  DynamicDialogModule,
  DynamicDialogRef,
} from 'primeng/dynamicdialog';
import { CalendarModule } from 'primeng/calendar';
import { ToastModule } from 'primeng/toast';
import { ShareDataService } from '../../services/data/share-data.service';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'event-trackr-events',
  standalone: true,
  imports: [
    CommonModule,
    DropdownModule,
    InputTextModule,
    FormsModule,
    InputTextareaModule,
    ButtonModule,
    CalendarModule,
    ToastModule,
    DynamicDialogModule,
  ],
  templateUrl: './events.component.html',
  styleUrl: './events.component.scss',
  providers: [
    CategoriesService,
    DynamicDialogRef,
    DynamicDialogConfig,
    MessageService,
  ],
})
export class EventsComponent implements OnInit {
  categories: Category[] = [];
  selected_category: Category = {
    id: 0,
    name: '',
  };
  name: string;
  notes: string;
  event: any;
  edit_event: boolean;
  date: Date;
  constructor(
    private categoriesService: CategoriesService,
    private eventsService: EventsService,
    public dialogData: DynamicDialogConfig,
    private dialogRef: DynamicDialogRef,
    private shareDataService: ShareDataService,
  ) {}

  ngOnInit(): void {
    this.getCategories();
    this.event = this.dialogData.data.event;
    this.edit_event = this.dialogData.data.edit_event;

    if (this.edit_event) {
      this.name =
        this.event.event._def.title.indexOf(' ') !== -1
          ? this.event.event._def.title.substring(
              this.event.event._def.title.indexOf(' ') + 1,
            )
          : this.event.event._def.title;
      this.selected_category = this.event.event._def.extendedProps.category;
      this.notes = this.event.event._def.extendedProps.notes;
      this.date = new Date(this.event.event.startStr);
    }
  }

  async getCategories() {
    this.categoriesService.getCategories().subscribe((categories: any) => {
      this.categories = categories.result;
      console.log(this.categories);
    });
  }

  saveEvent() {
    const add_event: Events = {
      name: this.name,
      event_date: this.event.date,
      category: this.selected_category,
      notes: this.notes,
    };

    if (add_event) {
      this.eventsService.postEvent(add_event).subscribe((res: any) => {
        console.log(res);
      });
    }
  }

  updateEvent() {
    const update_event: Events = {
      id: this.event.event._def.extendedProps.db_id,
      name: this.name,
      event_date: this.date,
      category: this.selected_category,
      notes: this.notes,
    };

    if (update_event) {
      this.eventsService
        .patchEvent(this.event.event._def.extendedProps.db_id, update_event)
        .subscribe((res: any) => {
          this.dialogRef.close();
          this.shareDataService.sendData(res.statusCode === 200);
        });
    }
  }
}