import { Routes } from '@angular/router';
import { authGuard } from './user/guards/auth/auth.guard';

export const routes: Routes = [
    { path: '', loadComponent: () => import('./webpage/components/homepage/homepage.component') },
    { path: 'auth', loadChildren: () => import('./user/components/auth/auth.module').then((m) => m.AuthModule) },
    { path: 'user', loadChildren: () => import('./user/components/dashboard/dashboard.module').then((m) => m.DashboardModule), canActivate: [authGuard] },
    { path: '**', redirectTo: '', pathMatch: 'full' },
];
