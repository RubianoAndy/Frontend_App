import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

import { TranslatePipe } from '../../pipes/translate/translate.pipe';
import { NgFor } from '@angular/common';
import { TranslateService } from '../../services/translate/translate.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    NgFor,
    RouterLink,
    RouterLinkActive,
    TranslatePipe
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

  }

  goToLogin() {
    window.open('http://localhost:4200/auth/login', '_blank');
  }

  changeLanguage(event: any) {
    var language = event.target.value;
    console.log('Idioma seleccionado: ' + language);
  }
}
