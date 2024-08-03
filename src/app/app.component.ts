import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DarkModeService } from './global/services/dark-mode/dark-mode.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  constructor(
    private darkModeService: DarkModeService,
  ) {
    // this.darkModeService.applyTheme();
    this.getMode();
  }

  getMode(): void {
    const darkMode = localStorage.getItem('darkMode');
    const hasReloaded = localStorage.getItem('hasReloaded');

    if (!darkMode)
      localStorage.setItem('darkMode', 'true'); // Por defecto en modo oscuro

    if (!hasReloaded) {
      localStorage.setItem('hasReloaded', 'true');
      window.location.reload();
    } else
      localStorage.removeItem('hasReloaded');

    this.darkModeService.applyTheme();
  }
}
