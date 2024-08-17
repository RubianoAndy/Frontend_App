import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { NavbarComponent } from '../../../global/components/navbar/navbar.component';
import { BannerComponent } from '../../../global/components/banner/banner.component';
import { FooterComponent } from '../../../global/components/footer/footer.component';
import { FaqQuestionComponent } from './faq-question/faq-question.component';
import { TranslateService } from '../../../global/services/translate/translate.service';

@Component({
  selector: 'app-faq',
  standalone: true,
  imports: [
    NgFor,
    NavbarComponent,
    BannerComponent,
    FooterComponent,
    FaqQuestionComponent,
  ],
  templateUrl: './faq.component.html',
  styleUrl: './faq.component.css'
})
export default class FaqComponent {
  bannerUrl: string= 'assets/images/landingpage/Banner/About.jpg';

  questions = [
    { 
      question: 'how does your company contribute to sustainability and the use of clean energy', 
      answer: 'faq_aswer_1',
    },
    { 
      question: 'what is the process for custom software development with your company', 
      answer: 'faq_aswer_2',
    },
    { 
      question: 'what kind of support and maintenance do you offer for your technology solutions', 
      answer: 'faq_aswer_3',
    },
    { 
      question: 'how does your company ensure data security in its software solutions', 
      answer: 'faq_aswer_4',
    },
    { 
      question: 'how do water treatment plants work', 
      answer: 'faq_aswer_5',
    },
    { 
      question: 'what are the advantages of using electrolysis in water treatment compared to traditional methods', 
      answer: 'faq_aswer_6',
    },
  ];

  constructor (
    private translateService: TranslateService,
  ) {

  }

  getTranslation(key: string): string {
    return this.translateService.translate(key);
  }
}