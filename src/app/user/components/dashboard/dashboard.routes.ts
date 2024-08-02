import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';

import { DashboardComponent } from './dashboard.component';
import { authenticatedGuard } from '../../guards/authenticated/authenticated.guard';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      { path: '', redirectTo: '', pathMatch: 'full' },
      { path: '', loadComponent: () => import('./home/home.component') },
      { path: 'account', loadComponent: () => import('./account/account.component') },
      { path: '**', redirectTo: '', pathMatch: 'full' },
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
export class DashboardRoutes {}
