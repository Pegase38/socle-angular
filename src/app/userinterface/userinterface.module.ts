import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../shared/shared.module';

import { UserinterfaceComponent } from './containers/userinterface/userinterface.component';
import { NavComponent } from './components/nav/nav.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [UserinterfaceComponent, NavComponent, HeaderComponent, FooterComponent],
  imports: [SharedModule, RouterModule],
  exports: [UserinterfaceComponent]
})
export class UserinterfaceModule {}
