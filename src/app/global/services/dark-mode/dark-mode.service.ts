import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DarkModeService {
  private isDarkMode = false;

  constructor() {
    this.initializeDarkMode();
  }

  private initializeDarkMode(): void {
    const darkMode = localStorage.getItem('darkMode');
    const hasReloaded = localStorage.getItem('hasReloaded');

    if (!darkMode) {
      localStorage.setItem('darkMode', 'true'); // Por defecto en modo oscuro
    }

    if (!hasReloaded) {
      localStorage.setItem('hasReloaded', 'true');
      window.location.reload();
    } else {
      localStorage.removeItem('hasReloaded');
      this.applyMode();
    }
  }

  applyMode(): void {
    const isDarkMode = localStorage.getItem('darkMode') === 'true';
    const html = document.documentElement;

    if (isDarkMode) {
      html.classList.add('dark');
    } else {
      html.classList.remove('dark');
    }
  }

  toggleMode(): void {
    const isDarkMode = localStorage.getItem('darkMode') === 'true';
    localStorage.setItem('darkMode', (!isDarkMode).toString());
    this.applyMode();
  }

  isDarkModeEnabled(): boolean {
    return this.isDarkMode;
  }
}
