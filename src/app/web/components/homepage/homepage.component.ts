import { Component } from '@angular/core';
import { NavbarComponent } from '../../../global/components/navbar/navbar.component';
import { BannerHomeComponent } from '../../../global/components/banner-home/banner-home.component';
import { FeaturesComponent } from '../../../global/components/features/features.component';
import { FooterComponent } from '../../../global/components/footer/footer.component';
import { TranslateService } from '../../../global/services/translate/translate.service';

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [
    NavbarComponent,
    BannerHomeComponent,
    FeaturesComponent,
    FooterComponent,
  ],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.css'
})
export default class HomepageComponent {

  constructor (
    private translateService: TranslateService,
  ) {

  }

  getTranslation(key: string): string {
    return this.translateService.translate(key);
  }
}
