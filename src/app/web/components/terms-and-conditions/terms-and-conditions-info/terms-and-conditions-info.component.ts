import { Component } from '@angular/core';
import { TranslateService } from '../../../../global/services/translate/translate.service';
import { environment } from '../../../../global/utils/environments/environment';

@Component({
  selector: 'app-terms-and-conditions-info',
  standalone: true,
  imports: [],
  templateUrl: './terms-and-conditions-info.component.html',
  styleUrl: './terms-and-conditions-info.component.css'
})
export class TermsAndConditionsInfoComponent {
  url = environment.url;

  constructor (
    private translateService: TranslateService,
  ) {

  }

  getTranslation(key: string): string {
    return this.translateService.translate(key);
  }
}
