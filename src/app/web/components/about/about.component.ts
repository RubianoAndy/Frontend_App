import { Component } from '@angular/core';
import { NavbarComponent } from '../../../global/components/navbar/navbar.component';
import { BannerComponent } from '../../../global/components/banner/banner.component';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [
    NavbarComponent,
    BannerComponent,
  ],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export default class AboutComponent {
  bannerURL: string= 'assets/images/landingpage/Banner/Homepage.jpg';

}
