import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { of } from 'rxjs';

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const accessToken = getAccessToken();

  if (!accessToken) {
    router.navigate(['/login']);
    return false;
  }

  return true;
};

function getAccessToken() {
  return sessionStorage.getItem('access_token') ?? null;
}
