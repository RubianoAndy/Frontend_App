import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard.component';
import { authenticatedGuard } from '../../guards/authenticated/authenticated.guard';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      { path: '', redirectTo: '', pathMatch: 'full' },
      { path: '', loadComponent: () => import('./home/home.component') },
      { path: 'password', loadComponent: () => import('./account-password/account-password.component') },
      // { path: 'register', loadComponent: () => import('./register/register.component'), canActivate: [authenticatedGuard] },
      { path: '**', redirectTo: '', pathMatch: 'full' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}
