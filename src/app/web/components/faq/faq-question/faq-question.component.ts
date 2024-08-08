import { Component, Input } from '@angular/core';
import { NgClass } from '@angular/common';

import { TranslateService } from '../../../../global/services/translate/translate.service';

@Component({
  selector: 'app-faq-question',
  standalone: true,
  imports: [
    NgClass,
  ],
  templateUrl: './faq-question.component.html',
  styleUrl: './faq-question.component.css'
})
export class FaqQuestionComponent {
  @Input() question_number!: number;
  @Input() question!: string;
  @Input() answer!: string;

  isMenuOpen = false;

  constructor 
  (
    private translateService: TranslateService,
  ) {

  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  isOpen(): boolean {
    return this.isMenuOpen;
  }

  getTranslation(key: string): string {
    return this.translateService.translate(key);
  }
}
