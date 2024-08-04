import { NgClass } from '@angular/common';
import { Component } from '@angular/core';

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
  isMenuOpen = false;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  isOpen(): boolean {
    return this.isMenuOpen;
  }
}
