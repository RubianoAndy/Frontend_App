import { Component, OnDestroy, OnInit } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Subscription } from 'rxjs';

import { environment } from '../../../global/utils/environments/environment';

import { LanguageSwitcherComponent } from '../../../global/components/language-switcher/language-switcher.component';

import { TranslateService } from '../../../global/services/translate/translate.service';
import { LoadingService } from '../../../global/services/loading/loading.service';

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterLink,
    LanguageSwitcherComponent,
  ],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.css'
})
export class AuthComponent implements OnInit, OnDestroy {
  logo = environment.logo;
  
  startComponentTime: number = 1;

  // currentYear: number = environment.currentYear;
  // page: string = environment.site_name;

  private languageSubscription: Subscription | undefined;

  constructor(
    private translateService: TranslateService,
    private loadingService: LoadingService,
  ) { }

  ngOnInit(): void {
    this.loadingService.show();
    
    this.languageSubscription = this.translateService.currentLanguage$.subscribe(language => {
      if (language === 'pt')
        this.logo = environment.logo_brazil;
      else
        this.logo = environment.logo;
    });

    setTimeout(() => {
      this.loadingService.hide();
    }, 1000 * this.startComponentTime);
  }

  ngOnDestroy(): void {
    if (this.languageSubscription)
      this.languageSubscription.unsubscribe();
  }

  getTranslation(key: string): string {
    return this.translateService.translate(key);
  }
}
