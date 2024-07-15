import { Component, Input, inject } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { TopBarComponent } from '../top-bar/top-bar.component';
import { AuthenticationService } from '../../services/authentication/authentication.service';
import { Gender, Role, User } from '@event-trackr/shared';
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

  // todo: get this two arrays from the backend
  roles: Role[] = [
    { id: 1, name: 'SysAdmin' },
    { id: 2, name: 'Admin' },
    { id: 3, name: 'Empleado' },
  ];
  genders: Gender[] = [
    { id: 1, name: 'Masculino' },
    { id: 2, name: 'Femenino' },
  ];

  formGroup: FormGroup;

  formBuilder = inject(FormBuilder);
  userService = inject(UsersService);
  route = inject(ActivatedRoute);

  ngOnInit(): void {
    const actionType = this.getActionType();
    debugger;
    switch (actionType) {
      case 'add':
        this.buildForm();
        break;

      case 'edit':
        this.canEdit = true;
        this.loadUser(actionType);
        break;

      case 'view':
        this.canEdit = false;
        this.loadUser(actionType);
        this.formGroup.disable();
        break;
    }
  }

  loadUser(actionType: 'add' | 'edit' | 'view' = 'view'): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (['view', 'edit'].includes(actionType) && id) {
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

    if (
      url.some(
        segment => segment.path === 'edit' || segment.path === 'user-profile',
      )
    ) {
      return 'edit';
    }

    return 'view';
  }

  getIndexedArray(array: (Gender | Role)[]): (Gender | Role)[] {
    return array.reduce((acc: (Gender | Role)[], role) => {
      acc[role.id] = role;
      return acc;
    }, []);
  }

  buildForm(user?: User): void {
    this.formGroup = this.formBuilder.group({
      username: [user ? user.username : ''],
      email: [user ? user.email : ''],
      gender: [user ? this.getIndexedArray(this.genders)[user.gender.id] : ''],
      name: [user ? user.name : ''],
      role: [user ? this.getIndexedArray(this.roles)[user.role.id] : ''],
      telephone: [user ? user.telephone : ''],
    });
  }
}
