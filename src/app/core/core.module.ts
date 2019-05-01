import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MessageService } from 'primeng/components/common/messageservice';

import { AuthModule } from './auth/auth.module';
import { OverlayModule } from './overlay/overlay.module';
import { LoggerModule } from './logger/logger.module';

@NgModule({
  imports: [CommonModule, OverlayModule, AuthModule, LoggerModule],
  exports: [OverlayModule, AuthModule, LoggerModule],
  providers: [MessageService]
})
export class CoreModule {}
