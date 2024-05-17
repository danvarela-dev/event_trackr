/* eslint-disable @nx/enforce-module-boundaries */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { environment } from 'apps/client/environments/environment';
import { Events } from 'shared/src/lib/models/events.interface';

@Injectable({
  providedIn: 'root',
})
export class EventsService {
  private base_url = environment.api;
  httpClient = inject(HttpClient);

  constructor() {}

  getEvents() {
    const timestamp = new Date().getTime();
    return this.httpClient.get(`${this.base_url}/events/${timestamp}`);
  }

  postEvent(event: Events) {
    return this.httpClient.post(`${this.base_url}/events`, { event });
  }

  patchEvent(id: number, updatedEvent: Events) {
    const params = new HttpParams().set('id', id);
    return this.httpClient.patch(`${this.base_url}/events`, updatedEvent, {
      params,
    });
  }
}
