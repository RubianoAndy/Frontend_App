import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { NgClass, NgIf } from '@angular/common';
import { AuthService } from '../../../services/auth/auth.service';
import { TranslatePipe } from '../../../../../translate/translate.pipe';

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
  loading: boolean = false;

  form!: FormGroup;

  isPasswordVisible: boolean = false;

  language: 'en' | 'es' = 'es';

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,

    private authService: AuthService,
  ) {

  }

  ngOnInit(): void {
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
}
