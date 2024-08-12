import { Component, OnInit } from '@angular/core';
import { NgClass, NgIf } from '@angular/common';
import { FormBuilder, FormGroup, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

import { PrivacyPolicyInfoComponent } from '../../../../web/components/privacy-policy/privacy-policy-info/privacy-policy-info.component';
import { TermsAndConditionsInfoComponent } from '../../../../web/components/terms-and-conditions/terms-and-conditions-info/terms-and-conditions-info.component';

import { TranslateService } from '../../../../global/services/translate/translate.service';
import { RegisterService } from '../../../services/register/register.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    RouterLink,
    PrivacyPolicyInfoComponent,
    TermsAndConditionsInfoComponent,
    NgClass,
    NgIf,
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export default class RegisterComponent implements OnInit {
  isModalOpen = false;
  modalPart: string | undefined;

  loading: boolean = false;
  form!: FormGroup;
  isPasswordVisible: boolean = false;

  constructor (
    private formBuilder: FormBuilder,
    private router: Router,
    private translateService: TranslateService,

    private registerService: RegisterService,
  ) {

  }

  ngOnInit(): void {
    this.createForm();
  }

  createForm(data: any = null) {
    data = data || {
      name_1: '',
      name_2: null,
      lastname_1: '',
      lastname_2: null,

      identification_number: '',
      birth_date: '',
      mobile: '',

      email: '',
      password: '',

      consent: false,
    }

    this.form = this.formBuilder.group({
      name_1: [data.name_1, [ Validators.required, Validators.minLength(2), Validators.maxLength(25) ]],
      name_2: [data.name_2, [ Validators.minLength(2), Validators.maxLength(25) ]],
      lastname_1: [data.lastname_1, [ Validators.required, Validators.minLength(2), Validators.maxLength(25) ]],
      lastname_2: [data.lastname_2, [ Validators.minLength(2), Validators.maxLength(25) ]],

      identification_number: [data.identification_number, [ Validators.required, Validators.pattern('^[0-9]*$'), Validators.minLength(6), Validators.maxLength(25) ]],
      birth_date: [data.birth_date ? new Date(data.birth_date): null, [ Validators.required, Validators.minLength(1) ]],
      mobile: [data.mobile, [ Validators.required, Validators.pattern('^[0-9]*$'), Validators.minLength(7), Validators.maxLength(10) ]],

      email: [data.email, [ Validators.required, Validators.email, Validators.minLength(6), Validators.maxLength(100) ]],
      password: [data.password, [ Validators.required, Validators.minLength(6), Validators.maxLength(20) ]],

      consent: [data.consent, [ Validators.required, Validators.requiredTrue ]],
    });
  }

  onSubmit() {
    var body = {
      name_1: this.form.value.name_1,
      name_2: this.form.value.name_2,
      lastname_1: this.form.value.lastname_1,
      lastname_2: this.form.value.lastname_2,

      identification_number: this.form.value.identification_number,
      birth_date: this.form.value.birth_date,
      mobile: this.form.value.mobile,

      email: this.form.value.email,
      username: this.form.value.email,  // Se le asigna el correo al username que no genere problema en la base de datos
      password: this.form.value.password,

      consent: this.form.value.consent,
    };

    if (this.form.valid && body) {
      this.loading = true;
      this.register(body);
    }
  }

  togglePasswordVisibility(): void {
    this.isPasswordVisible = !this.isPasswordVisible;
  }

  register(body: any): void {
    this.registerService.register(body).subscribe({
      next: () => {
        this.loading = false;
        this.router.navigate(['auth/login']);
      },
      error: (err) => {
        this.loading = false;
        console.error('Login failed', err);
      }
    });
  }

  getTranslation(key: string): string {
    return this.translateService.translate(key);
  }

  openModal(event: Event, modalPart: string): void {
    this.modalPart = modalPart;
    event.preventDefault(); // Evita la navegación por defecto del enlace
    this.isModalOpen = true;
  }

  closeModal(): void {
    this.isModalOpen = false;
  }
}
