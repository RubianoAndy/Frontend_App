import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { NavbarComponent } from '../../../global/components/navbar/navbar.component';
import { BannerComponent } from '../../../global/components/banner/banner.component';
import { FooterComponent } from '../../../global/components/footer/footer.component';
import { FaqQuestionComponent } from './faq-question/faq-question.component';
import { TranslatePipe } from '../../../global/pipes/translate/translate.pipe';

@Component({
  selector: 'app-faq',
  standalone: true,
  imports: [
    NgFor,
    NavbarComponent,
    BannerComponent,
    FooterComponent,
    FaqQuestionComponent,
    TranslatePipe
  ],
  templateUrl: './faq.component.html',
  styleUrl: './faq.component.css'
})
export default class FaqComponent {
  language: 'en' | 'es' = 'es';
  
  bannerUrl: string= 'assets/images/landingpage/Banner/About.jpg';

  questions = [
    { 
      question: 'How do I know if a product is available in boutiques?', 
      answer: 'Remember you can query the status of your orders any time in My orders in the My account section. If you are not registered at Mango.com, you can access directly in the Orders section. In this case, you will have to enter your e-mail address and order number.'
    },
    { 
      question: 'What is the return policy?', 
      answer: 'You can return your product within 30 days of purchase. Please refer to our return policy for more details.'
    },
  ];
}