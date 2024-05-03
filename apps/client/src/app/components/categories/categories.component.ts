import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoriesService } from '../../services/categories/categories.service';
import { Observable } from 'rxjs';
// eslint-disable-next-line @nx/enforce-module-boundaries
import { Category } from 'shared/src/lib/models/category.interface';
import { TableModule } from 'primeng/table';

@Component({
  selector: 'event-trackr-categories',
  standalone: true,
  imports: [CommonModule, TableModule],
  providers: [CategoriesService],
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.scss',
})
export class CategoriesComponent implements OnInit {
  categories$: Observable<Category[]>;
  constructor(private categoriesService: CategoriesService) {}

  ngOnInit(): void {
    this.getCategories();
  }

  getCategories() {
    this.categories$ = this.categoriesService.getCategories();
  }
}
