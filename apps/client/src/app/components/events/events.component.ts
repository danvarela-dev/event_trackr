/* eslint-disable @nx/enforce-module-boundaries */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DropdownModule } from 'primeng/dropdown';
import { CategoriesService } from '../../services/categories/categories.service';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { ButtonModule } from 'primeng/button';
import { EventsService } from '../../services/events/events.service';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { CalendarModule } from 'primeng/calendar';
import { ToastModule } from 'primeng/toast';
import { ShareDataService } from '../../services/data/share-data.service';
import { Category, Events } from '@event-trackr/shared';
import { RecursionTypeService } from '../../services/recursion_type/recursion-type.service';
import { RecursionTypeI } from 'shared/src/lib/models/recursion_type.interface';
import { SelectButtonModule } from 'primeng/selectbutton';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { InputNumberModule } from 'primeng/inputnumber';

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
    SelectButtonModule,
    InputIconModule,
    IconFieldModule,
    InputNumberModule,
  ],
  templateUrl: './events.component.html',
  styleUrl: './events.component.scss',
  providers: [CategoriesService],
})
export class EventsComponent implements OnInit {
  categories: Category[];
  selected_category: Category = {
    id: 0,
    name: '',
    color: '',
    icon: '',
  };
  name: string;
  notes: string;
  source: string;
  event: any;
  edit_event: boolean;
  date: Date;
  recursionTypes: RecursionTypeI[];
  selectedRecursion: RecursionTypeI = { id: 0, recursion_type: '' };
  recursionUnit: number;
  constructor(
    private categoriesService: CategoriesService,
    private eventsService: EventsService,
    public dialogData: DynamicDialogConfig,
    private dialogRef: DynamicDialogRef,
    private shareDataService: ShareDataService,
    private recursionTypesService: RecursionTypeService,
  ) {}

  ngOnInit(): void {
    this.getCategories();
    this.getRecursionTypes();
    this.event = this.dialogData.data.event;
    this.edit_event = this.dialogData.data.edit_event;

    if (this.edit_event) {
      this.name = this.event.event._def.extendedProps.name;
      this.selected_category = this.event.event._def.extendedProps.category;
      this.notes = this.event.event._def.extendedProps.notes;
      this.date = new Date(this.event.event.startStr);
      this.source = this.event.event._def.extendedProps.source;
      this.selectedRecursion = this.event.event._def.extendedProps.recursion;
      this.recursionUnit = this.event.event._def.extendedProps.recursionUnit;
    }
  }

  async getCategories() {
    this.categoriesService.getCategories().subscribe((categories: any) => {
      this.categories = categories.result;
    });
  }

  saveEvent() {
    const add_event: Events = {
      name: this.name,
      event_date: this.event.date,
      category: this.selected_category,
      notes: this.notes,
      source: this.source,
      recursion: this.selectedRecursion,
      recursion_unit: this.recursionUnit,
    };

    if (add_event) {
      this.eventsService.postEvent(add_event).subscribe((res: any) => {
        this.dialogRef.close();
        this.shareDataService.sendData(res.statusCode === 201);
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
      recursion: this.selectedRecursion,
      recursion_unit: this.recursionUnit,
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

  async getRecursionTypes() {
    await this.recursionTypesService
      .getRecursionTypes()
      .subscribe((res: any) => {
        this.recursionTypes = res.result;
      });
  }
}
