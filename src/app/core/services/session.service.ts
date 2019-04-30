import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { filter, map, first, distinctUntilChanged, skip } from 'rxjs/operators';

import { SessionState } from 'src/app/shared/models/session-state';

/**
 * Gère la session dans le local storage.
 * Propose un API pour modifier la session et récupérer les informations de sessions.
 */
@Injectable({
  providedIn: 'root'
})
export class SessionService {
  localStorageKey = 'sessionState';
  sessionState$: BehaviorSubject<SessionState>;

  constructor() {
    this.sessionState$ = new BehaviorSubject<SessionState>(null);

    this._initializeState();

    window.addEventListener('storage', event => {
      /* Not concerned here. */
      if (event.key !== this.localStorageKey) {
        return;
      }

      this._initializeState();
    });
  }

  get state$(): Observable<SessionState> {
    return this.sessionState$.pipe(filter(state => state !== null));
  }

  getToken(): Observable<string> {
    return this.state$.pipe(map(state => state.token));
  }

  getUserId(): Observable<string> {
    return this.state$.pipe(map(state => state.userId));
  }

  isSignedIn(): Observable<boolean> {
    return this.state$.pipe(map(state => state.isSignedIn()));
  }

  onSignin(): Observable<SessionState> {
    return this._onIsSignedInChange().pipe(filter(state => state.isSignedIn()));
  }

  onSignout(): Observable<SessionState> {
    return this._onIsSignedInChange().pipe(filter(state => !state.isSignedIn()));
  }

  markTokenExpired() {
    this.updateState(new SessionState());
  }

  updateState(stateData: SessionState) {
    const state = Object.assign(new SessionState(), this.sessionState$.getValue(), stateData);

    this.sessionState$.next(state);
    this._saveState(state);
  }

  private _initializeState() {
    this.sessionState$.next(this._loadState() || new SessionState());
  }

  private _saveState(state: SessionState) {
    localStorage.setItem(this.localStorageKey, JSON.stringify(state));
  }

  private _loadState(): SessionState {
    const stateString = localStorage.getItem(this.localStorageKey);

    if (stateString == null) {
      return null;
    }

    return new SessionState(JSON.parse(stateString));
  }

  private _onIsSignedInChange(): Observable<SessionState> {
    return this.state$.pipe(
      distinctUntilChanged((previous, next) => previous.isSignedIn() === next.isSignedIn()),
      /* Skip the current behaviour subject value and wait for a change. */
      skip(1)
    );
  }
}
