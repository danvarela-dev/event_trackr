import { Category, Response } from '@event-trackr/shared';
import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
// eslint-disable-next-line @nx/enforce-module-boundaries
import { environment } from 'apps/client/environments/environment';

@Injectable()
export class CategoriesService {
  private baseUrl = environment.api;
  httpClient = inject(HttpClient);

  getCategories(): Observable<Response<Category[]>> {
    return this.httpClient.get<Response<Category[]>>(
      `${this.baseUrl}/categories`,
    );
  }

  postCategory(category: Category): Observable<Response<Category>> {
    return this.httpClient.post<Response<Category>>(
      `${this.baseUrl}/categories`,
      { category },
    );
  }
}
