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
      'dont worry, it happens to all of us': 'Don\'t worry, it happens to all of us!',
      'complete the following form to recover your account': 'Complete the following form to recover your account',
      'please introduce the 6 digit code we sent via email' : 'Please introduce the 6 digit code we sent via email',

      'login': 'Login',
      'sign up': 'Sign up',

      'or': 'or',

      'email': 'Email',
      'name@email.com': 'name@email.com',
      'password': 'Password',

      'have account': 'Have account?',
      'forgot password': 'Forgot your password?',
      'change password': 'Change password',
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

      'we are committed to the environment': 'We are committed to the environment!',

      'auth_description' : 
        `We are a business group specialising in innovation and creating environmentally friendly technology. 
        We are dedicated to creating sustainable solutions, including chemical-free water treatment plants, 
        solar photovoltaic power systems and software development. We also specialise in the reproduction and 
        commercialisation of carnivorous plants, offering a wide variety of species. In addition, we create 
        informative and educational content about these fascinating plants. Follow us on our social networks 
        to stay up to date on our news and products!`,

      'home': 'Home',
      'about': 'About',
      'contact': 'Contact',

      'legal framework': 'Legal',
      'privacy policy': 'Privacy Policy',
      'terms and conditions': 'Terms and conditions',

      'faq': 'FAQ\'s',

      'position': 'Position',
      'president': 'President and CEO',
      'chief executive manager': 'CEO',
      'chief financial officer': 'CFO',
      'chief operating officer': 'COO',

      'electronic engineer with experience in software development, electronic product design and power electronics' : 'Electronic engineer with experience in software development, electronic product design and power electronics.',
      'committed teacher and counselor with experience and knowledge in psychology and emotional behavior': 'Committed teacher and counselor with experience and knowledge in psychology and emotional behavior.',
      'retired army and financial engineer with experience in budgeting and corporate social responsibility': 'Retired army and financial engineer with experience in budgeting and corporate social responsibility.',
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
      'change password': 'Cambiar la contraseña',
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

      'we are committed to the environment': '¡Estamos comprometidos con el medio ambiente!',

      'auth_description' : 
        `Somos un grupo empresarial especializado en la innovación y creación de tecnología amigable con el medio ambiente. 
        Nos dedicamos a crear soluciones sostenibles, incluyendo plantas de tratamiento de agua sin agentes químicos, 
        sistemas de energía solar fotovoltaica y desarrollo de software. También nos especializamos en la reproducción y 
        comercialización de plantas carnívoras, ofreciendo una amplia variedad de especies. Además, creamos contenido informativo 
        y educativo sobre estas fascinantes plantas. ¡Síguenos en nuestras redes sociales para estar al tanto de nuestras novedades y productos!`,

      'home': 'Inicio',
      'about': 'Nosotros',
      'contact': 'Contáctanos',

      'legal framework': 'Marco legal',
      'privacy policy': 'Política de privacidad',
      'terms and conditions': 'Términos y condiciones',

      'faq': 'Preguntas frecuentes',

      'position': 'Cargo',
      'president': 'Presidente y CEO',
      'chief executive manager': 'CEO',
      'chief financial officer': 'CFO',
      'chief operating officer': 'COO',

      'electronic engineer with experience in software development, electronic product design and power electronics' : 'Ingeniero electrónico con experiencia en desarrollo de software, diseño de productos electrónicos y electrónica de potencia.',
      'committed teacher and counselor with experience and knowledge in psychology and emotional behavior': 'Docente y consejera comprometida con experiencia y conocimientos en psicología y comportamiento emocional.',
      'retired army and financial engineer with experience in budgeting and corporate social responsibility': 'Ingeniero financista retirado del ejército con experiencia en presupuestos y responsabilidad social empresarial.',
    }
  };

  transform(value: string, language: 'en' | 'es'): string {
    return this.translations[language][value] || value;
  }
}
