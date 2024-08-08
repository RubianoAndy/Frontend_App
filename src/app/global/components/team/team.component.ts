import { Component, Input } from '@angular/core';
import { NgIf } from '@angular/common';

import { TranslateService } from '../../services/translate/translate.service';

@Component({
  selector: 'app-team',
  standalone: true,
  imports: [
    NgIf,
  ],
  templateUrl: './team.component.html',
  styleUrl: './team.component.css'
})
export class TeamComponent {
  @Input() member: any;

  constructor (
    private translateService: TranslateService,
  ) {
    
  }

  getTranslation(key: string): string {
    return this.translateService.translate(key);
  }
}
