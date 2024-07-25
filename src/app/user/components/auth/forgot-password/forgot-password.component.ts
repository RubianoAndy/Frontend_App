import { Component, OnInit } from '@angular/core';
import { TranslatePipe } from '../../../../../translate/translate.pipe';
import { FormBuilder, FormGroup, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgClass, NgIf } from '@angular/common';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-forgot-password',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    RouterLink,
    NgClass,
    NgIf,
    TranslatePipe
  ],
  templateUrl: './forgot-password.component.html',
  styleUrl: './forgot-password.component.css'
})
export default class ForgotPasswordComponent implements OnInit{
  language: 'en' | 'es' = 'es';
  
  loading: boolean = false;

  form!: FormGroup;

  constructor (
    private formBuilder: FormBuilder,
    private router: Router,
  ) {

  }

  ngOnInit(): void {
    this.createForm();
  }

  createForm(data: any = null) {
    data = data || {
      email: '',
    }

    this.form = this.formBuilder.group({
      email: [data.email, [ Validators.required, Validators.email, Validators.minLength(6), Validators.maxLength(100) ]],
    });
  }

  onSubmit() {

  }
}
