import { HttpErrorResponse, HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { catchError } from 'rxjs';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const route = inject(Router);
  const user = JSON.parse(sessionStorage.getItem('user') ?? '{}');
  const { token } = user;

  if (token) {
    req = req.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`,
      },
    });
  }

  return next(req).pipe(
    catchError(({ error }: HttpErrorResponse) => {
      if (error.statusCode === 401) {
        sessionStorage.removeItem('user');
        route.navigate(['/login']);
      }

      throw error;
    }),
  );
};
