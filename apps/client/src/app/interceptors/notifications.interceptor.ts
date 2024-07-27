import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { MessageService } from 'primeng/api';
import { catchError } from 'rxjs';

export const errorNotificationsInterceptor: HttpInterceptorFn = (req, next) => {
  const messageService = inject(MessageService);

  return next(req).pipe(
    catchError(({ error }) => {
      messageService.add({
        severity: 'error',
        summary: 'Error',
        detail: error.message ?? 'An error occurred',
      });
      throw error;
    }),
  );
};
