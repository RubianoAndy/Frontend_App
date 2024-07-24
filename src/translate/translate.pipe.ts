import { Pipe, PipeTransform } from '@angular/core';

interface Translations {
  [key: string]: string;
}

interface LanguageTranslations {
  [languageCode: string]: Translations;
}

@Pipe({
  name: 'translate',
  standalone: true
})
export class TranslatePipe implements PipeTransform {

  private translations: LanguageTranslations = {
    'en': {
      'login': 'Login',
      'sign up': 'Sign up',
      'forgot password': 'forgot your password?',
    },
    'es': {
      'login': 'Ingresa',
      'sign up': 'Regístrate',
      'forgot password': '¿Olvidaste tu contraseña?',
    }
  };

  transform(value: string, language: 'en' | 'es'): string {
    return this.translations[language][value] || value;
  }
}
