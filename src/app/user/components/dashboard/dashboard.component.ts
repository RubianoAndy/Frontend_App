import { Component, ElementRef, Renderer2, ViewChild  } from '@angular/core';
import { AuthService } from '../../services/auth/auth.service';
import { Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    RouterOutlet
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  @ViewChild('dropdownMenu', { static: true }) dropdownMenu!: ElementRef;
  loading: boolean = false;

  constructor (
    private authService: AuthService,
    private router: Router,
    private renderer: Renderer2,
  ) {

  }

  toggleDropdown() {
    const dropdown = this.dropdownMenu.nativeElement;
    const isHidden = dropdown.classList.contains('hidden');

    if (isHidden) {
      this.renderer.removeClass(dropdown, 'hidden');
      this.renderer.setAttribute(dropdown, 'aria-expanded', 'true');
    } else {
      this.renderer.addClass(dropdown, 'hidden');
      this.renderer.setAttribute(dropdown, 'aria-expanded', 'false');
    }
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
