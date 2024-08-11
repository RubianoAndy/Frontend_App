import { Component, OnDestroy, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { environment } from '../../utils/environments/environment';
import { NgFor } from '@angular/common';
import { Subscription } from 'rxjs';

import { LanguageSwitcherComponent } from '../language-switcher/language-switcher.component';
import { TranslateService } from '../../services/translate/translate.service';

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
export class NavbarComponent implements OnInit, OnDestroy {
  logo = environment.logo;

  private languageSubscription: Subscription | undefined;

  constructor (
    private translateService: TranslateService,
  ) {

  }

  ngOnInit(): void {
    const theme = localStorage.getItem('theme');
    if (theme === 'dark')
      document.documentElement.classList.add('dark');
    else
      document.documentElement.classList.remove('dark');

    this.languageSubscription = this.translateService.currentLanguage$.subscribe(language => {
      if (language === 'pt')
        this.logo = environment.logo_brazil;
      else
        this.logo = environment.logo;
    });
  }

  ngOnDestroy(): void {
    if (this.languageSubscription)
      this.languageSubscription.unsubscribe();
  }

  getTranslation(key: string): string {
    return this.translateService.translate(key);
  }
}
