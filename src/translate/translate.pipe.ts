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
      'hello': 'Hello!',
      'enter the credentials to access your account': 'Enter the credentials to access your account',
      'lets get started to this awesome advanture!': 'Let\'s get started to this awesome advanture!',

      'login': 'Login',
      'sign up': 'Sign up',

      'or': 'or',
      'name@email.com': 'name@email.com',

      'email': 'Email',
      'password': 'Password',

      'forgot password': 'forgot your password?',
      'login with google': 'Login with Google',
      'sign up with google': 'Sign up with Google',

      'first name': 'First name',
      'second name': 'Second name',
      'first lastname': 'First lastname',
      'second lastname': 'Second lastname',
      'identification number': 'Identification number',
      'birth date': 'birth date',
      'mobile': 'Mobile',
    },

    'es': {
      'hello': '¡Hola!',
      'enter the credentials to access your account': 'Ingresa las credenciales para acceder a tu cuenta',
      'lets get started to this awesome advanture!': '¡Comencemos con esta increíble aventura!',

      'login': 'Ingresa',
      'sign up': 'Regístrate',

      'or': 'O',

      'email': 'Email',
      'name@email.com': 'nombre@email.com',
      'password': 'Contraseña',

      'forgot password': '¿Olvidaste tu contraseña?',
      'login with google': 'Ingresa con Google',
      'sign up with google': 'Regístrate con Google',

      'first name': 'Primer nombre',
      'second name': 'Segundo nombre',
      'first lastname': 'Primer apellido',
      'second lastname': 'Segundo apellido',
      'identification number': 'Número de identificación',
      'birth date': 'Fecha de nacimiento',
      'mobile': 'Celular',
    }
  };

  transform(value: string, language: 'en' | 'es'): string {
    return this.translations[language][value] || value;
  }
}
