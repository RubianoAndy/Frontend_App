import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { environment } from '../../../global/utils/environments/environment';
import { LanguageSwitcherComponent } from '../../../global/components/language-switcher/language-switcher.component';
import { TranslateService } from '../../../global/services/translate/translate.service';

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [
    RouterOutlet,
    LanguageSwitcherComponent,
  ],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.css'
})
export class AuthComponent implements OnInit {
  currentYear: number = environment.currentYear;
  page: string = environment.site_name;

  constructor(
    private translateService: TranslateService,
  ) {}

  ngOnInit(): void {
    
  }

  getTranslation(key: string): string {
    return this.translateService.translate(key);
  }
}
