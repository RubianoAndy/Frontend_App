import { Component, ElementRef, OnInit, Renderer2, ViewChild  } from '@angular/core';
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { NgClass, NgIf } from '@angular/common';
import { environment } from '../../../global/utils/environments/environment';

import { DarkModeToggleComponent } from '../../../global/components/dark-mode-toggle/dark-mode-toggle.component';
import { LanguageSwitcherComponent } from '../../../global/components/language-switcher/language-switcher.component';

import { AuthService } from '../../services/auth/auth.service';
import { TranslateService } from '../../../global/services/translate/translate.service';
import { AlertService } from '../../../global/services/alert/alert.service';
import { LoadingService } from '../../../global/services/loading/loading.service';

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
export class DashboardComponent implements OnInit{
  @ViewChild('dropdownMenu', { static: true }) dropdownMenu!: ElementRef;
  @ViewChild('sidebar', { static: false }) sidebar!: ElementRef;
  // startComponentTime: number = 2;

  currentYear: number = environment.currentYear;
  page: string = environment.site_name;

  profile = JSON.parse(localStorage.getItem('profile') ?? '{}');

  isDropdownOpen: { [key: string]: boolean } = {};
  isSidebarOpen = true;

  constructor (
    private router: Router,
    private renderer: Renderer2,

    private authService: AuthService,
    private translateService: TranslateService,
    private alertService: AlertService,
    private loadingService: LoadingService,
  ) {

  }

  ngOnInit(): void {
    /* this.loadingService.show();

    setTimeout(() => {
      this.loadingService.hide();
    }, 1000 * this.startComponentTime); */
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
    this.loadingService.show();
    var alertBody = null;

    this.authService.logout().subscribe({
      next: (response) => {
        alertBody = {
          type: 'okay',
          title: 'have a good day',
          message: response.message,
        }

        this.alertService.showAlert(alertBody);
        this.loadingService.hide();
        // this.router.navigate(['auth/login']);
      },
      error: (response) => {
        this.loadingService.hide();
        // console.error('Logout failed', response);
      }
    });
  }

  getTranslation(key: string): string {
    return this.translateService.translate(key);
  }
}