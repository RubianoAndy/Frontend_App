import { Component } from '@angular/core';
import { NavbarComponent } from '../../../global/components/navbar/navbar.component';
import { BannerComponent } from '../../../global/components/banner/banner.component';
import { TranslatePipe } from '../../../../translate/translate.pipe';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [
    NavbarComponent,
    BannerComponent,
    TranslatePipe,
  ],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export default class ContactComponent {
  bannerUrl: string= 'assets/images/landingpage/Banner/Contact.jpg';

}
