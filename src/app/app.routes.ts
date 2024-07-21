import { Routes } from '@angular/router';
import { authGuard } from './user/guards/auth/auth.guard';

export const routes: Routes = [
    { path: '', loadComponent: () => import('./user/components/layout/layout.component') },
    { path: 'auth', loadChildren: () => import('./user/components/auth/auth.module').then((m) => m.AuthModule) },
    { path: 'dashboard', loadComponent: () => import('./user/components/dashboard/dashboard.component'), canActivate: [authGuard] },
    { path: '**', redirectTo: '', pathMatch: 'full' },
];
