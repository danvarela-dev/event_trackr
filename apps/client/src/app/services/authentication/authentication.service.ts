import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { Response, User } from '@event-trackr/shared';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  private baseUrl = environment.api;

  httpClient = inject(HttpClient);

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
