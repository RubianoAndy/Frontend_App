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
    const theme = localStorage.getItem('theme');

    if (theme) {
      if (theme === 'dark')
        document.documentElement.classList.add('dark');
      else
        document.documentElement.classList.remove('dark');
    } else {
      localStorage.setItem('theme', 'dark');
      document.documentElement.classList.add('dark');
    }
    
    if (this.authService.isAuthenticated())
      this.authService.updateRefreshToken();
  }
}
