import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { NgClass, NgIf } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    RouterLink,
    // AngularSvgIconModule,
    NgClass,
    NgIf,
    // ButtonComponent
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {
  form!: FormGroup;
  submitted = false;
  passwordTextType!: boolean;

  isPasswordVisible: boolean = false;

  constructor(
    private readonly _formBuilder: FormBuilder,
    private readonly _router: Router
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

    this.form = this._formBuilder.group({
      email: [data.email, [Validators.required, Validators.minLength(6), Validators.email]],
      password: [data.password, [ Validators.required, Validators.minLength(6) ]],
    });
  }

  onSubmit() {
    this.submitted = true;
    
    const { email, password } = this.form.value;

    // stop here if form is invalid
    if (this.form.invalid) {
      return;
    }

    this._router.navigate(['/']);
  }

  togglePasswordVisibility(): void {
    this.isPasswordVisible = !this.isPasswordVisible;
  }
}
