import { Component } from '@angular/core';
import { NavbarComponent } from '../../../global/components/navbar/navbar.component';
import { BannerComponent } from '../../../global/components/banner/banner.component';
import { FooterComponent } from '../../../global/components/footer/footer.component';
import { TranslatePipe } from '../../../../translate/translate.pipe';

@Component({
  selector: 'app-privacy-policy',
  standalone: true,
  imports: [
    NavbarComponent,
    BannerComponent,
    FooterComponent,
    TranslatePipe
  ],
  templateUrl: './privacy-policy.component.html',
  styleUrl: './privacy-policy.component.css'
})
export default class PrivacyPolicyComponent {
  language: 'en' | 'es' = 'es';
  
  bannerUrl: string= 'assets/images/landingpage/Banner/About.jpg';

}
