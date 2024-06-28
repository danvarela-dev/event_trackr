import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';
import { UsersService } from '../../services/users/users.service';
import { Observable, filter, map, tap } from 'rxjs';
import { User } from '@event-trackr/shared';
import { ButtonModule } from 'primeng/button';
import { Router } from '@angular/router';

@Component({
  selector: 'event-trackr-users',
  standalone: true,
  imports: [CommonModule, TableModule, ButtonModule],
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss',
})
export class UsersComponent implements OnInit {
  usersService = inject(UsersService);
  users$: Observable<User[]>;
  router = inject(Router);

  ngOnInit(): void {
    this.users$ = this.usersService
      .getAllUsers()
      .pipe(map(response => response.result ?? []));
  }

  deleteUser(id: number): void {
    this.usersService.deleteUser(id).subscribe(() => {
      this.users$ = this.usersService
        .getAllUsers()
        .pipe(map(response => response.result ?? []));
    });
  }

  editUser(id: number): void {
    console.log('Editing user with id:', id);
  }

  addUser(): void {
    this.router.navigate(['/layout/user-profile/new']);
  }
}
