import { NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { environment } from '../../utils/environments/environment';

import { TranslateService } from '../../services/translate/translate.service';
import { LoadingService } from '../../services/loading/loading.service';

@Component({
  selector: 'app-loading',
  standalone: true,
  imports: [
    NgIf
  ],
  templateUrl: './loading.component.html',
  styleUrl: './loading.component.css'
})
export class LoadingComponent implements OnInit {
  logo = environment.logo;
  isLoading = false;

  private languageSubscription: Subscription | undefined;

  constructor (
    private translateService: TranslateService,
    private loadingService: LoadingService
  ) {

  }

  ngOnInit(): void {
    this.loadingService.loading$.subscribe((loading: boolean) => {
      this.isLoading = loading;
    });

    this.languageSubscription = this.translateService.currentLanguage$.subscribe(language => {
      if (language === 'pt')
        this.logo = environment.logo_brazil;
      else
        this.logo = environment.logo;
    });
  }
}
