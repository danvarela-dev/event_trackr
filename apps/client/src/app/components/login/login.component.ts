import { Component, DestroyRef, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { AuthenticationService } from '../../services/authentication/authentication.service';
import { Router, RouterModule } from '@angular/router';
import { finalize } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'event-trackr-login',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    InputTextModule,
    FormsModule,
    ButtonModule,
    RouterModule,
  ],
  providers: [AuthenticationService],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  authenticationService = inject(AuthenticationService);
  router = inject(Router);

  constructor(
    private formBuilder: FormBuilder,
    private destroyRef: DestroyRef,
  ) {}

  ngOnInit() {
    this.initForm();
  }

  initForm(): void {
    this.loginForm = this.formBuilder.group({
      username: ['admin', Validators.required],
      password: ['admin', Validators.required],
    });
  }

  login(): void {
    this.authenticationService
      .login(this.loginForm.value)
      .pipe(
        finalize(() => {
          this.authenticationService
            .getUser()
            .pipe(takeUntilDestroyed(this.destroyRef))
            .subscribe(({ result }) => {
              this.authenticationService.loggedInUser$.next(result);
              this.authenticationService.loggedIn$.next(true);
            });
        }),
      )
      .subscribe(({ status, result }) => {
        if (status) {
          localStorage.setItem('access_token', result.access_token);

          this.router.navigate(['/home']);
          this.authenticationService.getUser().subscribe(user => {
            console.log(user);
            this.authenticationService.loggedInUser$.next(user.result);
          });
        }
      });
  }
}
