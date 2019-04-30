import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

import { SessionService } from '../services/session.service';

@Injectable({
  providedIn: 'root'
})
export class IsUserSignedInGuardGuard implements CanActivate {
  constructor(private session: SessionService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    return this.session.isSignedIn().pipe(
      tap(isSignedIn => {
        if (isSignedIn !== true) {
          this.router.navigate(['/login']);
        }
      })
    );
  }
}
