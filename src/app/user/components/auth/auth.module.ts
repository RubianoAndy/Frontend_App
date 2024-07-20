import { NgModule } from '@angular/core';

import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
// import { AngularSvgIconModule } from 'angular-svg-icon';
import { AuthRoutingModule } from './auth-routing.module';

@NgModule({ imports: [AuthRoutingModule], providers: [provideHttpClient(withInterceptorsFromDi())] }) // AngularSvgIconModule.forRoot()
export class AuthModule {}
