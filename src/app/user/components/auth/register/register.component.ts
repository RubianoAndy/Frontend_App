import { Component, OnInit } from '@angular/core';
import { NgClass, NgIf } from '@angular/common';
import { FormBuilder, FormGroup, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    RouterLink,
    NgClass,
    NgIf
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export default class RegisterComponent implements OnInit {
  loading: boolean = false;

  form!: FormGroup;

  constructor (
    private formBuilder: FormBuilder,
    private router: Router,
  ) {

  }

  ngOnInit(): void {
    
  }

  createForm(data: any = null) {
    data = data || {
      name_1: null,
      name_2: null,
      lastname_1: null,
      lastname_2: null,

      identification_number: null,
      birth_date: null,
      mobile: null,

      email: null,
      username: null,

      password: null,
      password_confirm: null,
    }

    this.form = this.formBuilder.group({
      name_1: [data.name_1, [ Validators.required, Validators.minLength(2), Validators.maxLength(25) ]],
      name_2: [data.name_2, [ Validators.minLength(2), Validators.maxLength(25) ]],
      lastname_1: [data.lastname_1, [ Validators.minLength(2), Validators.maxLength(25) ]],
      lastname_2: [data.lastname_2, [ Validators.required, Validators.minLength(2), Validators.maxLength(25) ]],

      identification_number: [data.identification_number, [ Validators.required, Validators.minLength(6), Validators.maxLength(25) ]],
      birth_date: [data.birth_date ? new Date(data.birth_date): null, [ Validators.required, Validators.minLength(1) ]],
      // mobile

      username: [data.username, [ Validators.required, Validators.minLength(6), Validators.minLength(25) ]],
      email: [data.email, [ Validators.required, Validators.email, Validators.minLength(6), Validators.minLength(100) ]],

      password: [data.password, [ Validators.required, Validators.minLength(6), Validators.maxLength(20) ]],
      password_confirm: [data.password_confirm, [ Validators.required, Validators.minLength(6), Validators.maxLength(20) ]],
    });
  }
}
