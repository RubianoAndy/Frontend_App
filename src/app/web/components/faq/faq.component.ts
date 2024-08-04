import { NgClass, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { NavbarComponent } from '../../../global/components/navbar/navbar.component';
import { FooterComponent } from '../../../global/components/footer/footer.component';
import { FaqQuestionComponent } from './faq-question/faq-question.component';

@Component({
  selector: 'app-faq',
  standalone: true,
  imports: [
    NgClass,
    NgIf,
    NavbarComponent,
    FooterComponent,
    FaqQuestionComponent,
  ],
  templateUrl: './faq.component.html',
  styleUrl: './faq.component.css'
})
export default class FaqComponent {

}