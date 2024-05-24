/* eslint-disable @nx/enforce-module-boundaries */
import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { environment } from 'apps/client/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class RecursionTypeService {
  private base_url = environment.api;
  httpClient = inject(HttpClient);

  constructor() {}

  getRecursionTypes() {
    return this.httpClient.get(`${this.base_url}/recursion`);
  }
}
