import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { en } from '../../utils/translations/en';
import { es } from '../../utils/translations/es';
import { pt } from '../../utils/translations/pt';

interface Translations {
  [key: string]: string;
}

interface TranslationsMap {
  [languageCode: string]: Translations;
}

@Injectable({
  providedIn: 'root'
})
export class TranslateService {
  private currentLanguage = new BehaviorSubject<string>('es');
  public currentLanguage$ = this.currentLanguage.asObservable();

  private translations: TranslationsMap = {
    pt: pt,
    en: en,
    es: es,
  };

  constructor() {
    const savedLanguage = localStorage.getItem('language') || 'es';
    this.setLanguage(savedLanguage);
  }

  getCurrentLanguage(): string {
    return this.currentLanguage.getValue();
  }

  setLanguage(language: string) {
    this.currentLanguage.next(language);
    localStorage.setItem('language', language);
  }

  translate(key: string): string {
    const language = this.getCurrentLanguage();
    const translation = this.translations[language]?.[key];
    return translation || key;
  }
}
