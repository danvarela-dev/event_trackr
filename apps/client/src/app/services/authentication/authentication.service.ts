import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, map } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { User, Response } from '@event-trackr/shared';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  private baseUrl = environment.api;

  httpClient = inject(HttpClient);

  loggedInUser$ = new BehaviorSubject<User | null>(null);
  loggedIn$ = new BehaviorSubject<boolean>(false);

  login(credentials: {
    username: string;
    password: string;
  }): Observable<Response<User>> {
    return this.httpClient
      .post<Response<User>>(`${this.baseUrl}/auth/login`, {
        ...credentials,
      })
      .pipe(
        map(response => {
          if (response.status) {
            sessionStorage.setItem('user', JSON.stringify(response.result));
          }
          return response;
        }),
      );
  }

  logout(): void {
    localStorage.clear();
  }

  getUser(): Observable<Response<User>> {
    return this.httpClient.get<Response<User>>(`${this.baseUrl}/auth/profile`);
  }
}
