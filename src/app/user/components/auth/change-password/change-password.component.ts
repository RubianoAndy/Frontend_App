import { Component, OnInit } from '@angular/core';
import { NgClass, NgIf } from '@angular/common';
import { FormBuilder, FormGroup, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { TranslatePipe } from '../../../../../translate/translate.pipe';


@Component({
  selector: 'app-change-password',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    RouterLink,
    NgClass,
    NgIf,
    TranslatePipe
  ],
  templateUrl: './change-password.component.html',
  styleUrl: './change-password.component.css'
})
export default class ChangePasswordComponent implements OnInit{
  language: 'en' | 'es' = 'es';

  loading: boolean = false;

  form!: FormGroup;

  isPasswordVisible: boolean = false;

  constructor (
    private formBuilder: FormBuilder,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.createForm();
  }

  createForm(data: any = null) {
    data = data || {
      code_1: null,
      code_2: null,
      code_3: null,
      code_4: null,
      code_5: null,
      code_6: null,

      // password: '',
    }

    this.form = this.formBuilder.group({
      code_1: [data.code_1, [ Validators.required ]],
      code_2: [data.code_2, [ Validators.required ]],
      code_3: [data.code_3, [ Validators.required ]],
      code_4: [data.code_4, [ Validators.required ]],
      code_5: [data.code_5, [ Validators.required ]],
      code_6: [data.code_6, [ Validators.required ]],
      
      // password: [data.password, [ Validators.required, Validators.minLength(6), Validators.maxLength(20) ]],
    });
  }
}
