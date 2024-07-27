import { Component, Input, OnDestroy, OnInit, inject } from '@angular/core';
import { AsyncPipe, NgOptimizedImage } from '@angular/common';
import { TopBarComponent } from '../top-bar/top-bar.component';
import { Gender, Role, User } from '@event-trackr/shared';
import { Observable, map, tap } from 'rxjs';
import { AvatarModule } from 'primeng/avatar';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { DropdownModule } from 'primeng/dropdown';
import { FloatLabelModule } from 'primeng/floatlabel';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { UsersService } from '../../services/users/users.service';
import { ActivatedRoute, UrlSegment } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { MessagesModule } from 'primeng/messages';
import { MessageService } from 'primeng/api';
import { confirmPasswordValidator } from '../../utils/validators/password-match.validator';

@Component({
  selector: 'event-trackr-user-profile',
  standalone: true,
  imports: [
    TopBarComponent,
    AvatarModule,
    ReactiveFormsModule,
    InputTextModule,
    DropdownModule,
    FloatLabelModule,
    NgOptimizedImage,
    AsyncPipe,
    ProgressSpinnerModule,
    ButtonModule,
    MessagesModule,
  ],
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.scss',
})
export class UserProfileComponent implements OnInit, OnDestroy {
  title = 'Perfil de Usuario';
  @Input() user$: Observable<User>;
  mode: 'add' | 'view' | 'edit' = 'view';

  messageService = inject(MessageService);

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
    this.mode = this.getActionType();

    switch (this.mode) {
      case 'add':
        this.buildForm();
        break;

      case 'edit':
        this.loadUser(this.mode);
        break;

      case 'view':
        this.loadUser(this.mode);
        this.formGroup.disable();
        break;
    }
  }

  ngOnDestroy(): void {
    this.formGroup.reset();
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
      username: [
        user ? user.username : '',
        [Validators.required, Validators.min(8)],
      ],
      email: [user ? user.email : '', [Validators.required, Validators.email]],
      gender: [
        user ? this.getIndexedArray(this.genders)[user.gender.id] : '',
        [Validators.required],
      ],
      name: [
        user ? user.name : '',
        [Validators.required, Validators.minLength(3)],
      ],
      role: [
        user ? this.getIndexedArray(this.roles)[user.role.id] : '',
        [Validators.required],
      ],
      telephone: [user ? user.telephone : '', [Validators.required]],
    });

    if (this.mode === 'add') {
      this.formGroup.addControl(
        'password',
        this.formBuilder.control('', [
          Validators.required,
          Validators.minLength(8),
        ]),
      );
      this.formGroup.addControl(
        'confirmPassword',
        this.formBuilder.control('', [Validators.required]),
      );

      this.formGroup.setValidators(confirmPasswordValidator);
    }
  }

  saveUser(): void {
    let user = this.formGroup.value;

    if (this.mode === 'add') {
      this.userService.createUser(user).subscribe(response => {
        this.messageService.add({
          severity: 'success',
          summary: 'Exito',
          detail: `El usuario ${response.result.username} ha sido creado.`,
        });

        this.formGroup.reset();
      });
    }

    if (this.mode === 'edit') {
      user = {
        id: Number(this.route.snapshot.paramMap.get('id')),
        ...user,
      };

      this.userService.updateUser(user).subscribe(response => {
        this.messageService.add({
          severity: 'success',
          summary: 'Exito',
          detail: `El usuario ${response.result.username} ha sido actualizado.`,
        });
      });
    }
  }

  getLabel(): string {
    return this.mode === 'add' ? 'Crear' : 'Actualizar';
  }

  getFieldError(name: string, error: string): boolean {
    const field = this.formGroup.get(name);
    return (field?.touched && field?.hasError(error)) ?? false;
  }
}
