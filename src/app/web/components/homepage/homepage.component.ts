import { Component } from '@angular/core';
import { NavbarComponent } from '../../../global/components/navbar/navbar.component';
import { BannerComponent } from '../../../global/components/banner/banner.component';
import { FooterComponent } from '../../../global/components/footer/footer.component';

import { TranslatePipe } from '../../../../translate/translate.pipe';

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [
    NavbarComponent,
    BannerComponent,
    FooterComponent,
    TranslatePipe,
  ],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.css'
})
export default class HomepageComponent {

}
