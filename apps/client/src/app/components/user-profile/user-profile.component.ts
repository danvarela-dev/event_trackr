import { Component, Input, inject } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { TopBarComponent } from '../top-bar/top-bar.component';
import { AuthenticationService } from '../../services/authentication/authentication.service';
import { Role, User } from '@event-trackr/shared';
import { Observable, map, tap } from 'rxjs';
import { AvatarModule } from 'primeng/avatar';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { DropdownModule } from 'primeng/dropdown';
import { FloatLabelModule } from 'primeng/floatlabel';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { UsersService } from '../../services/users/users.service';
import { ActivatedRoute, UrlSegment } from '@angular/router';

@Component({
  selector: 'event-trackr-user-profile',
  standalone: true,
  imports: [
    CommonModule,
    TopBarComponent,
    AvatarModule,
    ReactiveFormsModule,
    InputTextModule,
    DropdownModule,
    FloatLabelModule,
    NgOptimizedImage,
    ProgressSpinnerModule,
  ],
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.scss',
})
export class UserProfileComponent {
  title = 'Perfil de Usuario';
  @Input() user$: Observable<User>;
  canEdit = false;
  roles: Role[] = [
    { id: 1, name: 'SysAdmin' },
    { id: 2, name: 'Admin' },
    { id: 3, name: 'Empleado' },
  ];

  formGroup: FormGroup;

  formBuilder = inject(FormBuilder);
  userService = inject(UsersService);
  route = inject(ActivatedRoute);

  ngOnInit(): void {
    switch (this.getActionType()) {
      case 'add':
        this.buildForm();
        this.formGroup.enable();
        break;

      case 'edit':
        this.canEdit = true;
        this.loadUser();
        break;

      case 'view':
        this.canEdit = false;
        this.loadUser();
        break;
    }
  }

  loadUser() {
    const id = this.route.snapshot.paramMap.get('id');
    if (this.getActionType() === 'view' && id) {
      this.user$ = this.userService.getUserById(+id).pipe(
        map(response => response.result),
        tap(user => {
          this.buildForm(user);

          return user;
        }),
      );
    }
  }

  getActionType(): 'add' | 'edit' | 'view' {
    const url = this.route.snapshot.url as UrlSegment[];
    if (url.some(segment => segment.path === 'new')) {
      return 'add';
    }

    if (url.some(segment => segment.path === 'edit')) {
      return 'edit';
    }

    return 'view';
  }

  getIndexedRoles(): Role[] {
    return this.roles.reduce((acc: Role[], role) => {
      acc[role.id] = role;
      return acc;
    }, []);
  }

  buildForm(user?: User): void {
    this.formGroup = this.formBuilder.group({
      username: [user ? user.username : ''],
      email: [user ? user.email : ''],
      gender: [user ? user.gender : ''],
      name: [user ? user.name : ''],
      role: [user ? this.getIndexedRoles()[user.role.id] : ''],
      telephone: [user ? user.telephone : ''],
    });

    if (!this.canEdit) {
      this.formGroup.disable();
    }
  }
}
