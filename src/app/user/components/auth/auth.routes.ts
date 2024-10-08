import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';

import { AuthComponent } from './auth.component';
import { authenticatedGuard } from '../../guards/authenticated/authenticated.guard';

const routes: Routes = [
  {
    path: '',
    component: AuthComponent,
    children: [
      { path: '', redirectTo: 'login', pathMatch: 'full' },
      { path: 'login', loadComponent: () => import('./login/login.component'), canActivate: [authenticatedGuard] },
      { path: 'register', loadComponent: () => import('./register/register.component'), canActivate: [authenticatedGuard] },
      { path: 'forgot-password', loadComponent: () => import('./forgot-password/forgot-password.component'), canActivate: [authenticatedGuard] },
      { path: '**', redirectTo: 'login', pathMatch: 'full' },
    ],
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  providers: [
    provideHttpClient(withInterceptorsFromDi()),
  ],
  exports: [
    RouterModule,
  ],
})
export class AuthRoutes {}
