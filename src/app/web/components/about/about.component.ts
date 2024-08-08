import { Component } from '@angular/core';
import { NgFor } from '@angular/common';

import { NavbarComponent } from '../../../global/components/navbar/navbar.component';
import { BannerComponent } from '../../../global/components/banner/banner.component';
import { FooterComponent } from '../../../global/components/footer/footer.component';
import { TeamComponent } from '../../../global/components/team/team.component';
import { CompanyCardComponent } from '../../../global/components/company-card/company-card.component';

import { TranslateService } from '../../../global/services/translate/translate.service';
import { environment } from '../../../global/utils/environments/environment';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [
    NavbarComponent,
    FooterComponent,
    BannerComponent,
    TeamComponent,
    CompanyCardComponent,
    NgFor,
  ],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export default class AboutComponent {  
  bannerUrl: string= 'assets/images/landingpage/Banner/About.jpg';

  team = [
    { 
      name: 'Andy Rubiano',
      position: 'president',
      picture: 'assets/images/landingpage/Team/Andy Rubiano.png',
      linkedin: 'https://www.linkedin.com/in/rubianoandy/',
      facebook: 'https://www.facebook.com/AR.Andy.Rubiano',
      whatsapp: 'https://wa.me/573178737226',
    },
    { 
      name: 'Eduvina Rubiano',
      position: 'chief operating officer',
      picture: 'assets/images/landingpage/Team/Eduvina Rubiano.png',
      linkedin: null,
      facebook: 'https://www.facebook.com/EduvinaRubiano',
      whatsapp: 'https://wa.me/573118316261',
    },
    { 
      name: 'Luis Soto',
      position: 'chief financial officer',
      picture: 'assets/images/landingpage/Team/Luis Soto.png', 
      linkedin: null,
      facebook: null,
      whatsapp: 'https://wa.me/573115342408',
    }
  ];

  companies = [
    {
      logo: environment.logo_engineering,
      name: 'engineering, development and innovation division',
      description: 'Esto es un texto de prueba, Esto es un texto de prueba, Esto es un texto de prueba, Esto es un texto de prueba, Esto es un texto de prueba, Esto es un texto de prueba'
    },
    {
      logo: environment.logo_social,
      name: 'corporate social responsibility and environment division',
      description: 'Esto es un texto de prueba, Esto es un texto de prueba, Esto es un texto de prueba, Esto es un texto de prueba, Esto es un texto de prueba, Esto es un texto de prueba'
    },
    {
      logo: environment.logo_plants_white,
      name: 'study, conservation and reproduction of carnivorous plants division',
      description: 'Esto es un texto de prueba, Esto es un texto de prueba, Esto es un texto de prueba, Esto es un texto de prueba, Esto es un texto de prueba, Esto es un texto de prueba'
    }
  ];

  constructor (
    private translateService: TranslateService,
  ) {

  }

  getTranslation(key: string): string {
    return this.translateService.translate(key);
  }
}
