import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthModule } from './auth/auth.module';
import { OverlayModule } from './overlay/overlay.module';
import { LoggerModule } from './logger/logger.module';

@NgModule({
  imports: [CommonModule, OverlayModule, AuthModule, LoggerModule],
  exports: [OverlayModule, AuthModule, LoggerModule]
})
export class CoreModule {}
