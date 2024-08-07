import { Component, Input } from '@angular/core';
import { NgClass } from '@angular/common';
import { TranslatePipe } from '../../../../global/pipes/translate/translate.pipe';

@Component({
  selector: 'app-faq-question',
  standalone: true,
  imports: [
    NgClass,
    TranslatePipe,
  ],
  templateUrl: './faq-question.component.html',
  styleUrl: './faq-question.component.css'
})
export class FaqQuestionComponent {
  @Input() question_number!: number;
  @Input() question!: string;
  @Input() answer!: string;

  language: 'en' | 'es' = 'es';

  isMenuOpen = false;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  isOpen(): boolean {
    return this.isMenuOpen;
  }
}
