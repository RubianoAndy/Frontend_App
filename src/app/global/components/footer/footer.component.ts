import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { environment } from '../../utils/environments/environment';
import { TranslateService } from '../../services/translate/translate.service';


@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [
    RouterLink,
  ],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  page = environment.site_name;
  currentYear = environment.currentYear;

  constructor (
    private translateService: TranslateService,
  ) {

  }

  getTranslation(key: string): string {
    return this.translateService.translate(key);
  }
}
