import { Component } from '@angular/core';

import { NavbarComponent } from '../../../global/components/navbar/navbar.component';
import { BannerComponent } from '../../../global/components/banner/banner.component';
import { FooterComponent } from '../../../global/components/footer/footer.component';

import { TranslateService } from '../../../global/services/translate/translate.service';
import { environment } from '../../../global/utils/environments/environment';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [
    NavbarComponent,
    BannerComponent,
    FooterComponent,
  ],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export default class ContactComponent {
  bannerUrl: string = 'assets/images/landingpage/Banner/Contact.jpg';
  email = environment.email;

  constructor (
    private translateService: TranslateService,
  ) {
    
  }

  getTranslation(key: string): string {
    return this.translateService.translate(key);
  }
}
