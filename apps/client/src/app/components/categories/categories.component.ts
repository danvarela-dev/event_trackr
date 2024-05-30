/* eslint-disable @typescript-eslint/no-explicit-any */
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoriesService } from '../../services/categories/categories.service';
// eslint-disable-next-line @nx/enforce-module-boundaries
import { Category } from 'shared/src/lib/models/category.interface';
import { TableModule } from 'primeng/table';
import { ColorPickerModule } from 'primeng/colorpicker';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { PickerComponent } from '@ctrl/ngx-emoji-mart';

@Component({
  selector: 'event-trackr-categories',
  standalone: true,
  imports: [
    CommonModule,
    TableModule,
    ColorPickerModule,
    FormsModule,
    ButtonModule,
    InputTextModule,
    PickerComponent,
  ],
  providers: [CategoriesService],
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.scss',
})
export class CategoriesComponent implements OnInit {
  categories: Category[];
  color: string;
  disabled: boolean = true;
  showEmojis: boolean[] = [];
  selectedEmoji: string = '😀';
  constructor(private categoriesService: CategoriesService) {}

  ngOnInit(): void {
    this.getCategories();
  }

  getCategories() {
    this.categoriesService.getCategories().subscribe((category: any) => {
      this.categories = category.result;
      this.showEmojis = this.categories.map(() => false);
    });
  }

  editCategory(category: Category) {
    this.disabled = false;
  }

  saveCategory(category: Category) {
    this.categoriesService.postCategory(category).subscribe(res => {
      this.disabled = true;
    });
  }

  editCancel() {
    this.disabled = true;
  }

  toggleEmojis(index: number) {
    this.showEmojis[index] = !this.showEmojis[index];
  }

  addEmoji(event: any, index: number) {
    this.categories[index].icon = event.emoji.native;
    this.showEmojis[index] = false;
  }
}
