import { WritableSignal, inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthenticationService } from '../../services/authentication/authentication.service';
import { map, take, of } from 'rxjs';

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const accessToken = getAccessToken();

  if (!accessToken) {
    router.navigate(['/login']);
  } else {
    router.navigate(['/cms/home']);
  }

  return of(!!accessToken);
};

function getAccessToken() {
  return sessionStorage.getItem('access_token') ?? null;
}
