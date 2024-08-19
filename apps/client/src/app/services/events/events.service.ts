/* eslint-disable @nx/enforce-module-boundaries */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Response } from '@event-trackr/shared';
import { environment } from 'apps/client/environments/environment';
import { Observable } from 'rxjs';
import { Events } from 'shared/src/lib/models/events.interface';

@Injectable({
  providedIn: 'root',
})
export class EventsService {
  private base_url = environment.api;
  httpClient = inject(HttpClient);

  constructor() {}

  getEvents(): Observable<Response<Events[]>> {
    const timestamp = new Date().getTime();
    return this.httpClient.get<Response<Events[]>>(
      `${this.base_url}/events/${timestamp}`,
    );
  }

  postEvent(event: Events): Observable<Response<Events>> {
    return this.httpClient.post<Response<Events>>(`${this.base_url}/events`, {
      event,
    });
  }

  patchEvent(id: number, updatedEvent: Events): Observable<Response<Events>> {
    const params = new HttpParams().set('id', id);
    return this.httpClient.patch<Response<Events>>(
      `${this.base_url}/events`,
      updatedEvent,
      {
        params,
      },
    );
  }
}
