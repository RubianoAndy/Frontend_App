import { Component, Input } from '@angular/core';
import { TranslateService } from '../../services/translate/translate.service';

@Component({
  selector: 'app-company-card',
  standalone: true,
  imports: [],
  templateUrl: './company-card.component.html',
  styleUrl: './company-card.component.css'
})
export class CompanyCardComponent {
  @Input() logo!: string;
  @Input() name!: string;
  @Input() description!: string;
  

  constructor (
    private translateService: TranslateService,
  ) {

  }

  getTranslation(key: string): string {
    return this.translateService.translate(key);
  }
}
