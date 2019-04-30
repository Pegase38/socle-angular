import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './containers/login/login.component';
import { IsUserUnknownGuard } from '../core/guard/is-user-unknown.guard';

const routes: Routes = [
  {
    path: 'login',
    canActivate: [IsUserUnknownGuard],
    component: LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule {}
