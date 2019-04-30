import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { ButtonModule } from 'primeng/button';
import { MenuModule } from 'primeng/menu';
import { PanelModule } from 'primeng/panel';
import { ToolbarModule } from 'primeng/toolbar';

import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

@NgModule({
  declarations: [PageNotFoundComponent],
  imports: SharedModule.MODULE_LIST,
  exports: [...SharedModule.MODULE_LIST, PageNotFoundComponent]
})
export class SharedModule {
  static MODULE_LIST = [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    MenuModule,
    ToolbarModule,
    PanelModule,
    ButtonModule
  ];
}
