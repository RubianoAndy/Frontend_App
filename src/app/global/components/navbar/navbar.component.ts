import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { NgFor } from '@angular/common';
import { TranslateService } from '../../services/translate/translate.service';
import { LanguageSwitcherComponent } from '../language-switcher/language-switcher.component';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    NgFor,
    RouterLink,
    RouterLinkActive,
    LanguageSwitcherComponent,
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  constructor (
    private translateService: TranslateService,
  ) {

  }

  goToLogin() {
    window.open('http://localhost:4200/auth/login', '_blank');
  }

  getTranslation(key: string): string {
    return this.translateService.translate(key);
  }
}
