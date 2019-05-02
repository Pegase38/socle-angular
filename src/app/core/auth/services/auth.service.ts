import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { map, tap, switchMap, finalize, first } from 'rxjs/operators';

import { SessionService } from './session.service';
import { ConfigService } from '../../config/config.service';
import { Credential } from 'src/app/shared/models/auth/credential';
import { SessionState } from 'src/app/shared/models/auth/session-state';
import { AuthResponse } from 'src/app/shared/models/auth/authResponse';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  tokenKey = 'Bearer';
  authorizationToken: string;

  constructor(private http: HttpClient, private config: ConfigService, private session: SessionService) {
    this.session.getToken().subscribe(token => {
      this.authorizationToken = token;
    });
  }

  signIn(credential: Credential) {
    return this.http.post<AuthResponse>(this.getResourceBaseUrl(), credential).pipe(
      map(data => new AuthResponse(data)),
      tap(authResponse =>
        this.session.updateState(
          new SessionState({
            token: authResponse.token,
            tokenId: authResponse.id,
            userId: authResponse.userId
          })
        )
      ),
      map(() => undefined)
    );
  }

  signOut() {
    this.session.state$
      .pipe(
        first(),
        map(state => state.tokenId),
        switchMap(tokenId => this.http.delete(`${this.getResourceBaseUrl()}/${encodeURIComponent(tokenId)}`)),
        finalize(() => this.session.updateState(new SessionState()))
      )
      .subscribe();
  }

  getAuthorizationToken(): string {
    return `${this.tokenKey} ${encodeURIComponent(this.authorizationToken)}`;
  }

  private getResourceBaseUrl() {
    return `${this.config.getApiBaseUrl()}tokens`;
  }
}
