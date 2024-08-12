import { Component, OnDestroy, OnInit } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Subscription } from 'rxjs';

import { NavbarComponent } from '../../../global/components/navbar/navbar.component';

import { environment } from '../../../global/utils/environments/environment';
import { TranslateService } from '../../../global/services/translate/translate.service';

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterLink,
    NavbarComponent,
  ],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.css'
})
export class AuthComponent implements OnInit, OnDestroy {
  logo = environment.logo;
  // currentYear: number = environment.currentYear;
  // page: string = environment.site_name;

  private languageSubscription: Subscription | undefined;

  constructor(
    private translateService: TranslateService,
  ) { }

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
