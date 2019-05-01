import { Injectable } from '@angular/core';
import { Credential } from 'src/app/shared/models/credential';
import { SessionService } from './session.service';
import { SessionState } from 'src/app/shared/models/session-state';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  tokenKey = 'Bearer';
  authorizationToken: string;

  constructor(private session: SessionService) {
    this.session.getToken().subscribe(token => {
      this.authorizationToken = token;
    });
  }

  signIn(credential: Credential) {
    this.session.updateState(
      new SessionState({
        token: 'mytoken',
        tokenId: '1',
        userId: credential.username
      })
    );
    // TODO: Ici, on appel le service http qui valide les credential pour avoir le token
    // et on stock l'état dans la session. Renvoie un obserable?
  }

  signOut() {
    // TODO: Ici, on appel le service http qui valide les credential pour avoir le token et on stock l'état dans la session
    this.session.updateState(new SessionState());
  }

  getAuthorizationToken(): string {
    return `${this.tokenKey} ${encodeURIComponent(this.authorizationToken)}`;
  }
}
