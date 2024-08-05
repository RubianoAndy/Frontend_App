import { Component } from '@angular/core';
import { NavbarComponent } from '../../../global/components/navbar/navbar.component';
import { BannerComponent } from '../../../global/components/banner/banner.component';
import { FooterComponent } from '../../../global/components/footer/footer.component';
import { TeamComponent } from '../../../global/components/team/team.component';
import { NgFor } from '@angular/common';

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
export default class AboutComponent {
  bannerUrl: string= 'assets/images/landingpage/Banner/About.jpg';

  team = [
    { 
      name: 'Andy Rubiano',
      position: 'president',
      picture: 'assets/images/landingpage/Team/Andy Rubiano.png',
      description: 'electronic engineer with experience in software development, electronic product design and power electronics',
      linkedin: 'https://www.linkedin.com/in/rubianoandy/',
    },
    { 
      name: 'Eduvina Rubiano',
      position: 'chief operating officer',
      picture: 'assets/images/landingpage/Team/Eduvina Rubiano.png',
      description: 'committed teacher and counselor with experience and knowledge in psychology and emotional behavior',
      linkedin: 'https://www.linkedin.com/in/rubianoandy/',
    },
    { 
      name: 'Luis Soto',
      position: 'chief financial officer',
      picture: 'assets/images/landingpage/Team/Luis Soto.png', 
      description: 'retired army and financial engineer with experience in budgeting and corporate social responsibility',
      linkedin: 'https://www.linkedin.com/in/rubianoandy/',
    }
  ];
}
