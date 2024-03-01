/* eslint-disable @nx/enforce-module-boundaries */
import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { environment } from 'apps/client/environments/environment';

@Injectable()
export class CategoriesService {
  private baseUrl = environment.api;
  httpClient = inject(HttpClient);

  getCategories() {
    return this.httpClient.get(`${this.baseUrl}/categories`);
  }
}
