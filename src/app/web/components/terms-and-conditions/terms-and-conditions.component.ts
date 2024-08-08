import { Component } from '@angular/core';
import { NavbarComponent } from '../../../global/components/navbar/navbar.component';
import { BannerComponent } from '../../../global/components/banner/banner.component';
import { FooterComponent } from '../../../global/components/footer/footer.component';
import { TranslateService } from '../../../global/services/translate/translate.service';

@Component({
  selector: 'app-terms-and-conditions',
  standalone: true,
  imports: [
    NavbarComponent,
    BannerComponent,
    FooterComponent,
  ],
  templateUrl: './terms-and-conditions.component.html',
  styleUrl: './terms-and-conditions.component.css'
})
export default class TermsAndConditionsComponent {
  bannerUrl: string= 'assets/images/landingpage/Banner/About.jpg';

  constructor (
    private translateService: TranslateService,
  ) {

  }

  getTranslation(key: string): string {
    return this.translateService.translate(key);
  }
}
