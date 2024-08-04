import { NgClass, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { NavbarComponent } from '../../../global/components/navbar/navbar.component';
import { FooterComponent } from '../../../global/components/footer/footer.component';

@Component({
  selector: 'app-faq',
  standalone: true,
  imports: [
    NgClass,
    NgIf,
    NavbarComponent,
    FooterComponent,
  ],
  templateUrl: './faq.component.html',
  styleUrl: './faq.component.css'
})
export default class FaqComponent {
  isMenuOpen1 = false;
  isMenuOpen2 = false;
  isMenuOpen3 = false;
  isMenuOpen4 = false;

  toggleMenu(question: number) {
    if (question === 1)
      this.isMenuOpen1 = !this.isMenuOpen1;
    else if (question === 2)
      this.isMenuOpen2 = !this.isMenuOpen2;
    else if (question === 3)
      this.isMenuOpen3 = !this.isMenuOpen3;
    else if (question === 4)
      this.isMenuOpen4 = !this.isMenuOpen4;
  }
}