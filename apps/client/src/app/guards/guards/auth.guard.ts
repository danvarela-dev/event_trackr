import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { User } from '@event-trackr/shared';

export const authGuard: CanActivateFn = () => {
  const router = inject(Router);
  const accessToken = getAccessToken();

  if (!accessToken) {
    router.navigate(['/login']);
    return false;
  }

  return true;
};

function getAccessToken() {
  const parsed = JSON.parse(sessionStorage.getItem('user') ?? '{}') as User;
  return parsed.token;
}
