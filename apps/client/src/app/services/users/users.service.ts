import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Response, User } from '@event-trackr/shared';
import { environment } from '../../../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class UsersService {
  httpClient = inject(HttpClient);

  private base_url = environment.api;

  getAllUsers(): Observable<Response<User[]>> {
    return this.httpClient.get<Response<User[]>>(`${this.base_url}/users`);
  }

  getUserById(id: number): Observable<Response<User>> {
    return this.httpClient.get<Response<User>>(`${this.base_url}/users/${id}`);
  }

  createUser(user: User): Observable<Response<User>> {
    return this.httpClient.post<Response<User>>(`${this.base_url}/users`, user);
  }

  updateUser(user: User): Observable<Response<User>> {
    return this.httpClient.put<Response<User>>(
      `${this.base_url}/users/${user.id}`,
      user,
    );
  }

  deleteUser(id: number): Observable<Response<User>> {
    return this.httpClient.delete<Response<User>>(
      `${this.base_url}/users/${id}`,
    );
  }

  getCurrentUser(): User {
    return JSON.parse(sessionStorage.getItem('user') ?? '{}') as User;
  }
}
