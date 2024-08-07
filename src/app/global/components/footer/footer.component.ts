import { Component } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { RouterLink } from '@angular/router';
import { TranslatePipe } from '../../pipes/translate/translate.pipe';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [
    RouterLink,
    TranslatePipe
  ],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  language: 'en' | 'es' = 'es';

  page = environment.site_name;
  currentYear = environment.currentYear;
}
