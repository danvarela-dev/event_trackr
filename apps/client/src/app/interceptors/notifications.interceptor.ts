import { HttpInterceptorFn, HttpResponse } from '@angular/common/http';
import { inject } from '@angular/core';
import { MessageService } from 'primeng/api';
import { catchError, tap } from 'rxjs';

export const notificationsInterceptor: HttpInterceptorFn = (req, next) => {
  const messageService = inject(MessageService);

  return next(req).pipe(
    tap(event => {
      if (event instanceof HttpResponse) {
        const body = event.body as unknown as any;
        messageService.add({
          severity: 'success',
          summary: 'Success',
          detail: body.message ?? 'Operation successful',
        });
      }
    }),
    catchError(error => {
      messageService.add({
        severity: 'error',
        summary: 'Error',
        detail: error.message ?? 'An error occurred',
      });
      throw error;
    }),
  );
};
