import { Pipe, PipeTransform } from '@angular/core';
import { TranslateService } from '../../services/translate/translate.service';

@Pipe({
  name: 'translate',
  standalone: true,
  pure: false, // Marca el Pipe como impuro para que se actualice cuando cambie el idioma
})
export class TranslatePipe implements PipeTransform {
  private currentLanguage: 'en' | 'es' = 'es';
  private translations: { [key: string]: string } = {};

  constructor (
    private translateservice: TranslateService,
  ) {
    this.translateservice.currentLanguage$.subscribe(language => {
      this.currentLanguage = language;
      this.translations = this.translateservice.getTranslations(language);
    });
  }

  transform(value: string): string {
    return this.translations[value] || value;
  }
}
