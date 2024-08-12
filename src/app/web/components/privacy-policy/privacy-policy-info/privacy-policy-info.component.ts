import { Component } from '@angular/core';
import { TranslateService } from '../../../../global/services/translate/translate.service';
import { RouterLink } from '@angular/router';
import { environment } from '../../../../global/utils/environments/environment';

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
  url = environment.url;
  
  constructor (
    private translateService: TranslateService,
  ) {
    
  }

  getTranslation(key: string): string {
    return this.translateService.translate(key);
  }
}
