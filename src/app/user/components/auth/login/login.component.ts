import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { NgClass, NgIf } from '@angular/common';
import { AuthService } from '../../../services/auth/auth.service';

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
  loading: boolean = false;

  form!: FormGroup;
  passwordTextType!: boolean;

  isPasswordVisible: boolean = false;

  constructor(
    private readonly formBuilder: FormBuilder,
    private readonly router: Router,

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
      email: [data.email, [Validators.required, Validators.minLength(6), Validators.email]],
      password: [data.password, [ Validators.required, Validators.minLength(6) ]],
    });
  }

  onSubmit() {
    const email = this.form.value.email;
    const password = this.form.value.password;

    var param = {
      email: email,
      password: password
    };

    if (this.form.valid && param) {
      this.loading = true;
      this.login(email, password);
    }

    // stop here if form is invalid
    if (this.form.invalid) {
      return;
    }
  }

  togglePasswordVisibility(): void {
    this.isPasswordVisible = !this.isPasswordVisible;
  }

  login(email: string, password: string): void {
    this.authService.login(email, password).subscribe({
      next: () => {
        this.loading = false;
        this.router.navigate(['dashboard']);
      },
      error: (err) => {
        this.loading = false;
        console.error('Login failed', err);
      }
    });
  }
}
