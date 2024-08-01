import { Component } from '@angular/core';
import { TranslatePipe } from '../../../../../../translate/translate.pipe';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    TranslatePipe
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  language: 'en' | 'es' = 'es';
}
