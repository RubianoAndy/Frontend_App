import { Component, EventEmitter, Output, OnInit, OnDestroy } from '@angular/core';
import { TranslateService } from '../../services/translate/translate.service';
import { NgClass, NgFor, NgIf } from '@angular/common';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-language-switcher',
  standalone: true,
  imports: [
    NgClass,
    NgFor,
    NgIf,
  ],
  templateUrl: './language-switcher.component.html',
  styleUrls: ['./language-switcher.component.css']
})
export class LanguageSwitcherComponent implements OnInit, OnDestroy {
  @Output() languageChange = new EventEmitter<string>();

  isOpen = false;
  selectedLanguage = 'es';

  languages = [
    { label: 'portuguese', value: 'pt', icon: 'assets/flags/Brazil.png' },
    { label: 'english', value: 'en', icon: 'assets/flags/United States.png' },
    { label: 'spanish', value: 'es', icon: 'assets/flags/Spain.png' },
  ];

  private languageSubscription: Subscription | undefined;

  constructor(private translateService: TranslateService) {}

  ngOnInit(): void {
    this.selectedLanguage = this.translateService.getCurrentLanguage();
    this.languageSubscription = this.translateService.currentLanguage$.subscribe(language => {
      this.selectedLanguage = language;
    });
  }

  ngOnDestroy(): void {
    if (this.languageSubscription) {
      this.languageSubscription.unsubscribe();
    }
  }

  getTranslation(key: string): string {
    return this.translateService.translate(key);
  }

  toggleDropdown() {
    this.isOpen = !this.isOpen;
  }

  selectLanguage(language: string) {
    this.translateService.setLanguage(language);
    this.languageChange.emit(language);
    this.isOpen = false;
  }

  getLanguage() {
    const selectedLang = this.languages.find(lang => lang.value === this.selectedLanguage);
    return {
      icon: selectedLang ? selectedLang.icon : '',
      label: selectedLang ? selectedLang.label : ''
    };
  }
}