import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { tap, map } from 'rxjs/operators';

import { SessionService } from '../services/session.service';
import { ConfigService } from '../../config/config.service';

@Injectable({
  providedIn: 'root'
})
export class IsUserUnknownGuard implements CanActivate {
  constructor(private session: SessionService, private router: Router, private config: ConfigService) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.session.isSignedIn().pipe(
      tap(isSignedIn => {
        if (isSignedIn !== false) {
          this.router.navigate(this.config.getPostLoginDefaultRoute());
        }
      }),
      map(isSignedIn => !isSignedIn)
    );
  }
}
