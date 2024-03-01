/* eslint-disable @typescript-eslint/no-explicit-any */
import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';

@Injectable()
export class AuthenticationService {
  private baseUrl = environment.api;
  httpClient = inject(HttpClient);
  isLoggedIn = false;

  login(credentials: { username: string; password: string }): Observable<any> {
    return this.httpClient.post(`${this.baseUrl}/auth/login`, {
      ...credentials,
    });
  }
}
