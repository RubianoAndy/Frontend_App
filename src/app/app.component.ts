import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { AlertComponent } from './global/components/alert/alert.component';
import { LoadingComponent } from './global/components/loading/loading.component';

import { AuthService } from './user/services/auth/auth.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    AlertComponent,
    LoadingComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {

  constructor(
    private authService: AuthService,
  ) {
  }

  ngOnInit(): void {
    if (this.authService.isAuthenticated())
      this.authService.updateRefreshToken();
  }
}
