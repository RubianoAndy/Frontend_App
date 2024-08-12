import { Component } from '@angular/core';
import { TranslateService } from '../../../../global/services/translate/translate.service';

@Component({
  selector: 'app-terms-and-conditions-info',
  standalone: true,
  imports: [],
  templateUrl: './terms-and-conditions-info.component.html',
  styleUrl: './terms-and-conditions-info.component.css'
})
export class TermsAndConditionsInfoComponent {

  constructor (
    private translateService: TranslateService,
  ) {

  }

  getTranslation(key: string): string {
    return this.translateService.translate(key);
  }
}
