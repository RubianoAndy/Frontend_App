import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { NgClass, NgIf } from '@angular/common';
import { AuthService } from '../../../services/auth/auth.service';
import { TranslatePipe } from '../../../../../translate/translate.pipe';

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
    TranslatePipe,
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export default class LoginComponent implements OnInit {
  language: 'en' | 'es' = 'es';
  
  loading: boolean = false;

  form!: FormGroup;

  isPasswordVisible: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,

    private authService: AuthService,
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

    if (this.form.valid && body) {
      this.loading = true;
      this.login(body);
    }
  }

  togglePasswordVisibility(): void {
    this.isPasswordVisible = !this.isPasswordVisible;
  }

  login(body: any): void {
    this.authService.login(body).subscribe({
      next: () => {
        this.loading = false;
        this.router.navigate(['user']);
      },
      error: (err) => {
        this.loading = false;
        console.error('Login failed', err);
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
}
