import { Category } from '@event-trackr/shared';
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @nx/enforce-module-boundaries */
import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { environment } from 'apps/client/environments/environment';
import { Observable } from 'rxjs';

@Injectable()
export class CategoriesService {
  private baseUrl = environment.api;
  httpClient = inject(HttpClient);

  getCategories(): Observable<any> {
    return this.httpClient.get(`${this.baseUrl}/categories`);
  }

  postCategory(category: Category): Observable<any> {
    return this.httpClient.post(`${this.baseUrl}/categories`, { category });
  }
}
