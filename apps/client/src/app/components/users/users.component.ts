import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';
import { UsersService } from '../../services/users/users.service';
import { Observable, map, tap } from 'rxjs';
import { User } from '@event-trackr/shared';
import { ButtonModule } from 'primeng/button';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'event-trackr-users',
  standalone: true,
  imports: [CommonModule, TableModule, ButtonModule],
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss',
})
export class UsersComponent implements OnInit {
  usersService = inject(UsersService);
  messageService = inject(MessageService);
  users$: Observable<User[]>;
  router = inject(Router);

  ngOnInit(): void {
    this.users$ = this.usersService
      .getAllUsers()
      .pipe(map(response => response.result ?? []));
  }

  deleteUser({ id }: User): void {
    this.usersService.deleteUser(id).subscribe(() => {
      this.users$ = this.usersService.getAllUsers().pipe(
        map(
          response => response.result ?? [],
          tap(() => {
            this.messageService.add({
              severity: 'success',
              summary: 'Exito',
              detail: 'Usuario eliminado correctamente',
            });
          }),
        ),
      );
    });
  }

  editUser(user: User): void {
    this.router.navigate(['/layout/user-profile/edit', user.id]);
  }

  addUser(): void {
    this.router.navigate(['/layout/user-profile/new']);
  }
}
