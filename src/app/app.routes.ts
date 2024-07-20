import { Routes } from '@angular/router';
import { AuthModule } from './user/components/auth/auth.module';

export const routes: Routes = [
    { path: '', loadComponent: () => import('./user/components/layout/layout.component') },

    { path: 'auth', loadChildren: () => import('./user/components/auth/auth.module').then((m) => m.AuthModule) },

    // { path: 'login', loadComponent: () => import('./user/components/authentication/login/login.component') },
];
