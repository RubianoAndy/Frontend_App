import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: '', loadComponent: () => import('./user/components/layout/layout.component') },
];
