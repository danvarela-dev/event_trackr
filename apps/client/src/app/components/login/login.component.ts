import { Component, inject, OnInit } from '@angular/core';
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

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.initForm();
  }

  initForm(): void {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  login(): void {
    this.authenticationService
      .login(this.loginForm.value)
      .pipe(
        finalize(() => {
          this.authenticationService.getUser().subscribe(user => {
            this.authenticationService.loggedInUser$.next(user.result);
          });
        }),
      )
      .subscribe(({ status, result }) => {
        this.authenticationService.isLoggedIn = status;

        if (status) {
          localStorage.setItem('access_token', result.access_token);

          this.router.navigate(['/home']);
        }
      });
  }
}
