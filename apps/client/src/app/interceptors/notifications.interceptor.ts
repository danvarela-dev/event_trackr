import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { catchError } from 'rxjs';

export const errorNotificationsInterceptor: HttpInterceptorFn = (req, next) => {
  const messageService = inject(MessageService);
  const router = inject(Router);

  return next(req).pipe(
    catchError(({ error }) => {
      messageService.add({
        severity: 'error',
        summary: 'Error',
        detail: error.message ?? 'An error occurred',
      });
      if (error.statusCode === 401) {
        console.log(error);
        router.navigate(['/login']);
      }
      throw error;
    }),
  );
};
