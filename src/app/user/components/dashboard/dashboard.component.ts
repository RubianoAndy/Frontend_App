import { Component } from '@angular/core';
import { AuthService } from '../../services/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export default class DashboardComponent {
  loading: boolean = false;

  constructor (
    private authService: AuthService,
    private router: Router,
  ) {

  }

  logout() {
    this.authService.logout().subscribe({
      next: () => {
        this.loading = false;
        // this.router.navigate(['auth/login']);
      },
      error: (err) => {
        this.loading = false;
        console.error('Logout failed', err);
      }
    });
  }
}
