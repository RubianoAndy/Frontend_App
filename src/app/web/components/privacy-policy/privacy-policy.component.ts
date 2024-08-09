import { Component } from '@angular/core';

import { NavbarComponent } from '../../../global/components/navbar/navbar.component';
import { BannerComponent } from '../../../global/components/banner/banner.component';
import { FooterComponent } from '../../../global/components/footer/footer.component';
import { PrivacyPolicyInfoComponent } from './privacy-policy-info/privacy-policy-info.component';

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
export default class PrivacyPolicyComponent {
  bannerUrl: string= 'assets/images/landingpage/Banner/About.jpg';

  constructor (
    private translateService: TranslateService,
  ) {

  }

  getTranslation(key: string): string {
    return this.translateService.translate(key);
  }
}
