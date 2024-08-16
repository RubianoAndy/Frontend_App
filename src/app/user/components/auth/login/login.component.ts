import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { NgClass, NgIf } from '@angular/common';

import { TranslateService } from '../../../../global/services/translate/translate.service';
import { AuthService } from '../../../services/auth/auth.service';
import { AlertService } from '../../../../global/services/alert/alert.service';
import { LoadingService } from '../../../../global/services/loading/loading.service';

/*
// Para google, consultar index.html
declare var google: any;
*/

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    RouterLink,
    NgClass,
    NgIf,
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export default class LoginComponent implements OnInit {
  form!: FormGroup;

  isPasswordVisible: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,

    private translateService: TranslateService,
    private authService: AuthService,
    private alertService: AlertService,
    private loadingService: LoadingService,
  ) {

  }

  ngOnInit(): void {
    // this.googleInitialize();
    this.createForm();
  }

  createForm(data: any = null) {
    data = data || {
      email: '',
      password: '',
    }

    this.form = this.formBuilder.group({
      email: [data.email, [ Validators.required, Validators.minLength(6), Validators.email ]],
      password: [data.password, [ Validators.required, Validators.minLength(6) ]],
    });
  }

  onSubmit() {
    var body = {
      email: this.form.value.email,
      password: this.form.value.password
    };

    if (this.form.valid && body)
      this.login(body);
  }

  togglePasswordVisibility(): void {
    this.isPasswordVisible = !this.isPasswordVisible;
  }

  login(body: any): void {
    this.loadingService.show();
    var alertBody = null;

    this.authService.login(body).subscribe({
      next: (response) => {
        alertBody = {
          type: 'okay',
          title: 'welcome',
          message: response.message,
        }

        this.alertService.showAlert(alertBody);
        this.loadingService.hide();
        this.router.navigate(['user']);
      },
      error: (response) => {
        alertBody = {
          type: 'error',
          title: 'wrong credentials',
          message: response.error.message,
        }

        this.alertService.showAlert(alertBody);
        this.loadingService.hide();
      }
    });
  }
  
  /* private googleInitialize() {
    google.accounts.id.initialize({
      client_id: '408421446410-7incluce8okp0gcgg15g6v5l43pltt95.apps.googleusercontent.com',
      callback: (resp: any) => this.handleLogin(resp)
    });

    google.accounts.id.renderButton(
      document.getElementById("google-btn"), 
      {
        theme: 'filled_blue',
        size: 'large',
        shape: 'rectangle',
        width: 350
      }
    );
  } */

  /* handleLogin(response: any) {
    if(response){
      const payload = this.decodeToken(response.credential);

      // Petición para enviar el JWT Token al Backend
    }
  } */

  /* private decodeToken(token: string) {
    try {
      const base64Url = token.split('.')[1];
      const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
      const jsonPayload = decodeURIComponent(atob(base64).split('').map(function(c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
      }).join(''));
      return JSON.parse(jsonPayload);
    } catch (error) {
      console.error('Error decoding token', error);
      return null;
    }
  } */

  getTranslation(key: string): string {
    return this.translateService.translate(key);
  }
}
