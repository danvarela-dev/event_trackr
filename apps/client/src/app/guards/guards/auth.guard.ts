import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthenticationService } from '../../services/authentication/authentication.service';

export const authGuard: CanActivateFn = (route, state) => {
  const authenticationService = inject(AuthenticationService);
  const router = inject(Router);

  const user = authenticationService.getUser();

  if (!user) {
    router.navigate(['/login']);
    return false;
  }

  return true;
};
