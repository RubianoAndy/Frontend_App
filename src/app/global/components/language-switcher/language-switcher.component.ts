import { Component, EventEmitter, Output  } from '@angular/core';
import { TranslateService } from '../../services/translate/translate.service';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-language-switcher',
  standalone: true,
  imports: [
    NgFor,
    NgIf,
  ],
  templateUrl: './language-switcher.component.html',
  styleUrl: './language-switcher.component.css'
})
export class LanguageSwitcherComponent {
  @Output() languageChange = new EventEmitter<string>();

  isOpen = false;
  selectedLanguage = 'es';

  languages = [
    {label: 'spanish', value: 'es', icon: 'assets/flags/Spain.png' },
    {label: 'english', value: 'en', icon: 'assets/flags/United States.png'},
  ];

  constructor (
    private translateService: TranslateService,
  ) {
    
  }

  getTranslation(key: string): string {
    return this.translateService.translate(key);
  }

  toggleDropdown() {
    this.isOpen = !this.isOpen;
  }

  selectLanguage(language: string) {
    this.selectedLanguage = language;
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
