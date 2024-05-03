/* eslint-disable @typescript-eslint/no-explicit-any */
import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, ReplaySubject } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { User, Response } from '@event-trackr/shared';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  private baseUrl = environment.api;
  httpClient = inject(HttpClient);
  isLoggedIn = false;
  loggedInUser$: ReplaySubject<User> = new ReplaySubject<User>(1);

  login(credentials: {
    username: string;
    password: string;
  }): Observable<Response<{ access_token: string }>> {
    return this.httpClient.post<Response<{ access_token: string }>>(
      `${this.baseUrl}/auth/login`,
      {
        ...credentials,
      },
    );
  }

  logout(): void {
    sessionStorage.clear();
  }

  getUser(): Observable<Response<User>> {
    return this.httpClient.get<Response<User>>(`${this.baseUrl}/auth/profile`);
  }
}
