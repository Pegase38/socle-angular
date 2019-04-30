import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { tap, map } from 'rxjs/operators';

import { SessionService } from '../services/session.service';

@Injectable({
  providedIn: 'root'
})
export class IsUserUnknownGuard implements CanActivate {
  constructor(private session: SessionService, private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.session.isSignedIn().pipe(
      tap(isSignedIn => {
        if (isSignedIn !== false) {
          this.router.navigate(['/home']);
        }
      }),
      map(isSignedIn => !isSignedIn)
    );
  }
}
