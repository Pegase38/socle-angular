import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OverlayService {
  overlayDisplayed$: BehaviorSubject<boolean>;
  constructor() {
    this.overlayDisplayed$ = new BehaviorSubject<boolean>(false);
  }

  isOverlayDisplayed(): Observable<boolean> {
    return this.overlayDisplayed$;
  }

  showOverlay() {
    this.overlayDisplayed$.next(true);
  }

  hideOverlay() {
    this.overlayDisplayed$.next(false);
  }
}
