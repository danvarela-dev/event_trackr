import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Gender, Response } from '@event-trackr/shared';
// eslint-disable-next-line @nx/enforce-module-boundaries
import { environment } from 'apps/client/environments/environment';

@Injectable()
export class GendersService {
  private baseUrl = environment.api;
  constructor(private http: HttpClient) {}

  getGenders(): Observable<Response<Gender[]>> {
    return this.http.get<Response<Gender[]>>(`${this.baseUrl}/genders`);
  }
}
