import { Component } from '@angular/core';
import { NavbarComponent } from '../../../global/components/navbar/navbar.component';
import { BannerComponent } from '../../../global/components/banner/banner.component';
import { FooterComponent } from '../../../global/components/footer/footer.component';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [
    NavbarComponent,
    FooterComponent,
    BannerComponent,
  ],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export default class AboutComponent {
  bannerUrl: string= 'assets/images/landingpage/Banner/About.jpg';

}
