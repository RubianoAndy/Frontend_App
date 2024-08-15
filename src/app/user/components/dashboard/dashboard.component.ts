import { Component, ElementRef, Renderer2, ViewChild  } from '@angular/core';
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { NgClass, NgIf } from '@angular/common';
import { environment } from '../../../global/utils/environments/environment';

import { DarkModeToggleComponent } from '../../../global/components/dark-mode-toggle/dark-mode-toggle.component';
import { LanguageSwitcherComponent } from '../../../global/components/language-switcher/language-switcher.component';

import { AuthService } from '../../services/auth/auth.service';
import { TranslateService } from '../../../global/services/translate/translate.service';
import { AlertService } from '../../../global/services/alert.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterLinkActive,
    RouterLink,
    NgClass,
    NgIf,
    LanguageSwitcherComponent,
    DarkModeToggleComponent,
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  @ViewChild('dropdownMenu', { static: true }) dropdownMenu!: ElementRef;
  @ViewChild('sidebar', { static: false }) sidebar!: ElementRef;

  currentYear: number = environment.currentYear;
  page: string = environment.site_name;

  profile = JSON.parse(localStorage.getItem('profile') ?? '{}');

  isDropdownOpen: { [key: string]: boolean } = {};
  isSidebarOpen = true;

  loading: boolean = false;

  constructor (
    private router: Router,
    private renderer: Renderer2,

    private authService: AuthService,
    private translateService: TranslateService,
    private alertService: AlertService,
  ) {

  }

  toggleMenuDropdown() {
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

  toggleListDropdown(menu: string) {
    this.isDropdownOpen[menu] = !this.isDropdownOpen[menu];
  }

  toggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen;
  }

  logout() {
    var alertBody = null;

    this.authService.logout().subscribe({
      next: (response) => {
        alertBody = {
          type: 'okay',
          title: 'have a good day',
          message: response.message,
        }

        this.alertService.showAlert(alertBody);
        this.loading = false;
        // this.router.navigate(['auth/login']);
      },
      error: (err) => {
        this.loading = false;
        // console.error('Logout failed', err);
      }
    });
  }

  getTranslation(key: string): string {
    return this.translateService.translate(key);
  }
}