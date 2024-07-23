import { NgModule } from '@angular/core';

import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
// import { AngularSvgIconModule } from 'angular-svg-icon';
import { DashboardRoutingModule } from './dashboard-routing.module';

@NgModule({ imports: [DashboardRoutingModule], providers: [provideHttpClient(withInterceptorsFromDi())] }) // AngularSvgIconModule.forRoot()
export class DashboardModule {}
