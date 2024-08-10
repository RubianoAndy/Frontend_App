import { Component } from '@angular/core';
import { TranslateService } from '../../../../global/services/translate/translate.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-privacy-policy-info',
  standalone: true,
  imports: [
    RouterLink,
  ],
  templateUrl: './privacy-policy-info.component.html',
  styleUrl: './privacy-policy-info.component.css'
})
export class PrivacyPolicyInfoComponent {
  constructor (
    private translateService: TranslateService,
  ) {
    
  }

  getTranslation(key: string): string {
    return this.translateService.translate(key);
  }
}
