import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './shared/components/page-not-found/page-not-found.component';
import { IsUserSignedInGuardGuard } from './core/auth/guard/is-user-signed-in-guard.guard';
import { IsUserUnknownGuard } from './core/auth/guard/is-user-unknown.guard';
import { LoginComponent } from './core/auth/containers/login/login.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    canActivate: [IsUserSignedInGuardGuard],
    loadChildren: './home/home.module#HomeModule'
  },
  {
    path: 'login',
    canActivate: [IsUserUnknownGuard],
    component: LoginComponent
  },
  {
    path: '404',
    component: PageNotFoundComponent
  },
  {
    path: '**',
    redirectTo: '/404'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
