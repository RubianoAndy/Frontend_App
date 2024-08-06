import { Component } from '@angular/core';
import { NavbarComponent } from '../../../global/components/navbar/navbar.component';
import { BannerComponent } from '../../../global/components/banner/banner.component';
import { FooterComponent } from '../../../global/components/footer/footer.component';
import { TranslatePipe } from '../../../../translate/translate.pipe';

@Component({
  selector: 'app-terms-and-conditions',
  standalone: true,
  imports: [
    NavbarComponent,
    BannerComponent,
    FooterComponent,
    TranslatePipe,
  ],
  templateUrl: './terms-and-conditions.component.html',
  styleUrl: './terms-and-conditions.component.css'
})
export default class TermsAndConditionsComponent {
  language: 'en' | 'es' = 'es';
  
  bannerUrl: string= 'assets/images/landingpage/Banner/About.jpg';

}
