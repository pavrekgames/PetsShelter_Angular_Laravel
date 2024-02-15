import { TokenService } from './../services/token.service';
import { inject } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivateFn,
  Router,
  RouterStateSnapshot,
} from '@angular/router';


export const loggedGuard: CanActivateFn = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
) => {
  const router: Router = inject(Router);
  const tokenService: TokenService = inject(TokenService);

  if(!tokenService.loggedIn()){
    router.navigate(['/login']);
    return false;
  }else{
    return true;
  }

};
