import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgFor } from '@angular/common';

import { NavbarComponent } from '../../../global/components/navbar/navbar.component';
import { BannerComponent } from '../../../global/components/banner/banner.component';
import { FooterComponent } from '../../../global/components/footer/footer.component';
import { TeamComponent } from '../../../global/components/team/team.component';

import { Subscription } from 'rxjs';

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
    NgFor,
  ],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export default class AboutComponent implements OnInit, OnDestroy {
  logo = environment.logo;

  private languageSubscription: Subscription | undefined;

  bannerUrl: string= 'assets/images/landingpage/Banner/About.jpg';

  company_leader = {
    logo: this.logo,
    name: 'international company',
    description: 'it bears the name of the company and is dedicated to planning strategies and projects, as well as legal, judicial, financial, payroll and brand development work'
  };

  companies = [
    {
      logo: environment.logo_engineering,
      name: 'engineering, development and innovation division',
      description: 'responsible for promoting innovation through electronic engineering and software development, generating cutting-edge and highly reliable solutions'
    },
    {
      logo: environment.logo_social,
      name: 'corporate social responsibility and environment division',
      description: 'leads corporate social responsibility and environmental sustainability strategies, minimizing the negative impact on the planet and improving the organizational climate'
    },
    {
      logo: environment.logo_plants_black,
      name: 'study, conservation and reproduction of carnivorous plants division',
      description: 'specialized in the study, research, conservation, reproduction and responsible marketing of carnivorous plants, ensuring their preservation and promoting their knowledge and care'
    }
  ];

  philosophyOptions = [
    {
      value: 'innovation',
      description: 'we are constantly improving to provide innovative and technological solutions',
    },
    {
      value: 'resilience',
      description: 'we adapt to changes and difficult events by learning from them, developing new skills and continually improving',
    },
    {
      value: 'corporate social responsibility',
      description: 'every part inside and outside the organization is important to us, therefore, we seek to ensure that all interest groups are taken into account',
    },
    {
      value: 'environmental commitment',
      description: 'we develop solutions that generate the greatest positive impact on the environment, making this world a better place for everyone',
    },
    {
      value: 'transparency',
      description: 'all our processes are transparent and honest, generating greater confidence in all interest groups',
    },
    {
      value: 'respect',
      description: 'we encourage respect among all, avoiding discrimination or offense of any kind, achieving a positive organizational climate for everyone',
    },
  ];

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

  constructor (
    private translateService: TranslateService,
  ) {

  }

  ngOnInit(): void {
    this.languageSubscription = this.translateService.currentLanguage$.subscribe(language => {
      if (language === 'pt')
        this.logo = environment.logo_brazil;
      else
        this.logo = environment.logo;

      this.company_leader.logo = this.logo;
    });
  }

  ngOnDestroy(): void {
    if (this.languageSubscription)
      this.languageSubscription.unsubscribe();
  }

  getTranslation(key: string): string {
    return this.translateService.translate(key);
  }
}
