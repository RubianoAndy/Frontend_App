import { Component } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { TranslatePipe } from '../../../../translate/translate.pipe';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [
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
