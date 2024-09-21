import { HttpClient, HttpParams } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Response } from '@event-trackr/shared';
import { Observable } from 'rxjs';
import { Events } from 'shared/src/lib/models/events.interface';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class EventsService {
  private base_url = environment.api;
  httpClient = inject(HttpClient);

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

  deleteEvent(id: number): Observable<Response<boolean>> {
    const params = new HttpParams().set('id', id);
    console.log('deleteEvent', `${this.base_url}/events/delete`);
    return this.httpClient.delete<Response<boolean>>(
      `${this.base_url}/events/delete`,
      { params },
    );
  }
}
