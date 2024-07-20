import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: '', loadComponent: () => import('./user/layout/layout.component') },
];
