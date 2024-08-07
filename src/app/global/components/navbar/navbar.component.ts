import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { NgFor } from '@angular/common';
import { TranslateService } from '../../services/translate/translate.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    NgFor,
    RouterLink,
    RouterLinkActive,
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  languages = [
    {label: 'Español', value: 'es', selected: true},
    {label: 'Inglés', value: 'en'},
  ];

  constructor (
    private translateService: TranslateService,
  ) {
    this.translateService.setLanguage('es');
  }

  goToLogin() {
    window.open('http://localhost:4200/auth/login', '_blank');
  }

  changeLanguage(event: any) {
    const language = event.target.value;
    this.translateService.setLanguage(language);
  }

  getTranslation(key: string): string {
    return this.translateService.translate(key);
  }
}
