import { Routes } from '@angular/router';
import { authGuard } from './user/guards/auth/auth.guard';

export const routes: Routes = [
    // { path: '', loadComponent: () => import('./webpage/components/web/web.component') },
    { path: 'auth', loadChildren: () => import('./user/components/auth/auth.routes.module').then((m) => m.AuthRoutesModule) },
    { path: 'user', loadChildren: () => import('./user/components/dashboard/dashboard-routing.module').then((m) => m.DashboardRoutesModule), canActivate: [authGuard] },
    { path: '**', redirectTo: '', pathMatch: 'full' },
];
