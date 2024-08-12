import { Component, OnDestroy, OnInit } from '@angular/core';

import { NavbarComponent } from '../../../global/components/navbar/navbar.component';
import { BannerComponent } from '../../../global/components/banner/banner.component';
import { FooterComponent } from '../../../global/components/footer/footer.component';
import { TermsAndConditionsInfoComponent } from './terms-and-conditions-info/terms-and-conditions-info.component';

import { environment } from '../../../global/utils/environments/environment';

import { Subscription } from 'rxjs';

import { TranslateService } from '../../../global/services/translate/translate.service';

@Component({
  selector: 'app-terms-and-conditions',
  standalone: true,
  imports: [
    NavbarComponent,
    BannerComponent,
    FooterComponent,
    TermsAndConditionsInfoComponent
  ],
  templateUrl: './terms-and-conditions.component.html',
  styleUrl: './terms-and-conditions.component.css'
})
export default class TermsAndConditionsComponent implements OnInit, OnDestroy {
  logo = environment.logo;
  logo_engineering = environment.logo_engineering;
  logo_social = environment.logo_social;
  logo_plants_black = environment.logo_plants_black;

  private languageSubscription: Subscription | undefined;

  bannerUrl: string= 'assets/images/landingpage/Banner/About.jpg';

  constructor (
    private translateService: TranslateService,
  ) {

  }

  ngOnInit(): void {
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
