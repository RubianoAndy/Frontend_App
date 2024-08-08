import { Component, ElementRef, Renderer2, ViewChild  } from '@angular/core';
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { NgClass, NgIf } from '@angular/common';
import { environment } from '../../../global/utils/environments/environment';


import { AuthService } from '../../services/auth/auth.service';
import { LanguageSwitcherComponent } from '../../../global/components/language-switcher/language-switcher.component';
import { TranslateService } from '../../../global/services/translate/translate.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterLinkActive,
    RouterLink,
    NgClass,
    NgIf,
    LanguageSwitcherComponent
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
    private authService: AuthService,
    private router: Router,
    private renderer: Renderer2,

    private translateService: TranslateService,
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

  // toggleSidebar() {
  //   const sidebar = this.sidebar.nativeElement;
  //   const isHidden = sidebar.classList.contains('-translate-x-full');
    
  //   if (isHidden) {
  //     sidebar.classList.remove('-translate-x-full');
  //     sidebar.classList.add('translate-x-0');
  //   } else {
  //     sidebar.classList.add('-translate-x-full');
  //     sidebar.classList.remove('translate-x-0');
  //   }
  // }

  toggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen;
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

  getTranslation(key: string): string {
    return this.translateService.translate(key);
  }
}