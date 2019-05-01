import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { tap, finalize, delay } from 'rxjs/operators';

import { OverlayService } from '../services/overlay.service';

@Injectable()
export class OverlayInterceptor implements HttpInterceptor {
  constructor(private overlayService: OverlayService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    this.overlayService.showOverlay();

    return next.handle(req).pipe(
      delay(5000),
      finalize(() => {
        this.overlayService.hideOverlay();
      })
    );
  }
}
