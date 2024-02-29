import { AuthService } from './../services/auth.service';
import {
  ActivatedRouteSnapshot,
  CanActivateFn,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import { inject } from '@angular/core';
import { TokenService } from '../services/token.service';

export const adminGuard: CanActivateFn = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
) => {
  const router: Router = inject(Router);
  const tokenService: TokenService = inject(TokenService);
  const authService: AuthService = inject(AuthService);

  if (tokenService.loggedIn()) {
    const user = authService.getUser();

    if (user.role != 'admin') {
      router.navigate(['/']);
      return false;
    } else {
      return true;
    }
  } else {
    router.navigate(['/login']);
    return false;
  }
};
