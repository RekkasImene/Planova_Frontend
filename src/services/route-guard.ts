import { Injectable, inject } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  CanActivateFn,
  GuardResult,
  MaybeAsync,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { LocalAuthentication } from './local-authentication';

@Injectable({
  providedIn: 'root',
})
export class RouteGuard implements CanActivate {
  auth = inject(LocalAuthentication);
  router = inject(Router);

  constructor() {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree {
    if (this.auth.isUserLoggedIn()) {
      return true;
    }

    return this.router.createUrlTree(['/login'], { queryParams: { returnUrl: state.url } });
  }
}

export const loginGuard: CanActivateFn = () => {
  const auth = inject(LocalAuthentication);
  const router = inject(Router);

  if (auth.isUserLoggedIn()) {
    return router.createUrlTree(['/home']);
  }

  return true;
};
