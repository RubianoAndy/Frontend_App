import { Component } from '@angular/core';
import { AuthService } from '../../services/auth/auth.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export default class DashboardComponent {
  constructor (
    private authService: AuthService,
  ) {

  }

  logout() {
    this.authService.logout();
  }
}
