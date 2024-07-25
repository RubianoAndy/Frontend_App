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
      'all rights reserved': 'All rights reserved',

      'hello': 'Hello!',
      'enter the credentials to access your account': 'Enter the credentials to access your account',
      'lets get started to this awesome advanture': 'Let\'s get started to this awesome advanture!',
      'dont worry, it happens to all of us': 'don\'t worry, it happens to all of us!',
      'complete the following form to recover your account': 'Complete the following form to recover your account',
      'please introduce the 6 digit code we sent via email' : 'Please introduce the 6 digit code we sent via email',

      'login': 'Login',
      'sign up': 'Sign up',

      'or': 'or',

      'email': 'Email',
      'name@email.com': 'name@email.com',
      'password': 'Password',

      'have account': 'Have account?',
      'forgot password': 'forgot your password?',
      'login with google': 'Login with Google',
      'sign up with google': 'Sign up with Google',
      'send code': 'Send code',

      'first name': 'First name',
      'second name': 'Second name',
      'first lastname': 'First lastname',
      'second lastname': 'Second lastname',
      'identification number': 'Identification number',
      'birth date': 'birth date',
      'mobile': 'Mobile',
    },

    'es': {
      'all rights reserved': 'Todos los derechos reservados',

      'hello': '¡Hola!',
      'enter the credentials to access your account': 'Ingresa las credenciales para acceder a tu cuenta',
      'lets get started to this awesome advanture': '¡Comencemos con esta increíble aventura!',
      'dont worry, it happens to all of us': '¡No te preocupes, a todos nos pasa!',
      'complete the following form to recover your account': 'Completa el siguiente formulario para recuperar tu cuenta',
      'please introduce the 6 digit code we sent via email' : 'Por favor introduce el código de 6 dígitos que te enviamos por correo electrónico',

      'login': 'Ingresa',
      'sign up': 'Regístrate',

      'or': 'O',

      'email': 'Email',
      'name@email.com': 'nombre@email.com',
      'password': 'Contraseña',

      'have account': '¿Ya tienes cuenta?',
      'forgot password': '¿Olvidaste tu contraseña?',
      'login with google': 'Ingresa con Google',
      'sign up with google': 'Regístrate con Google',
      'send code': 'Enviar código',

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
