import { Component, OnDestroy, OnInit } from '@angular/core';

import { NavbarComponent } from '../../../global/components/navbar/navbar.component';
import { BannerComponent } from '../../../global/components/banner/banner.component';
import { FooterComponent } from '../../../global/components/footer/footer.component';
import { PrivacyPolicyInfoComponent } from './privacy-policy-info/privacy-policy-info.component';

import { environment } from '../../../global/utils/environments/environment';

import { Subscription } from 'rxjs';

import { TranslateService } from '../../../global/services/translate/translate.service';

@Component({
  selector: 'app-privacy-policy',
  standalone: true,
  imports: [
    NavbarComponent,
    BannerComponent,
    FooterComponent,
    PrivacyPolicyInfoComponent
  ],
  templateUrl: './privacy-policy.component.html',
  styleUrl: './privacy-policy.component.css'
})
export default class PrivacyPolicyComponent implements OnInit, OnDestroy {
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
