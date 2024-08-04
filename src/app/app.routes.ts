import { Routes } from '@angular/router';
import { authGuard } from './user/guards/auth/auth.guard';

export const routes: Routes = [
    { path: '', loadComponent: () => import('./web/components/homepage/homepage.component') },
    { path: 'about', loadComponent: () => import('./web/components/about/about.component') },
    { path: 'contact', loadComponent: () => import('./web/components/contact/contact.component') },
    { path: 'faq', loadComponent: () => import('./web/components/faq/faq.component') },
    { path: 'terms-and-conditions', loadComponent: () => import('./web/components/terms-and-conditions/terms-and-conditions.component') },
    { path: 'privacy-policy', loadComponent: () => import('./web/components/privacy-policy/privacy-policy.component') },
    { path: 'auth', loadChildren: () => import('./user/components/auth/auth.routes').then((m) => m.AuthRoutes) },
    { path: 'user', loadChildren: () => import('./user/components/dashboard/dashboard.routes').then((m) => m.DashboardRoutes), canActivate: [authGuard] },
    { path: '**', redirectTo: '', pathMatch: 'full' },
];
