import { NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { OverlayComponent } from './components/overlay/overlay.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { OverlayInterceptor } from './interceptors/overlay.interceptor';

@NgModule({
  declarations: [OverlayComponent],
  imports: [SharedModule],
  exports: [OverlayComponent],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: OverlayInterceptor,
      multi: true
    }
  ]
})
export class OverlayModule {}
