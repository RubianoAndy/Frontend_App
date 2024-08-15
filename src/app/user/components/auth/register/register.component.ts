import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgClass, NgFor, NgIf } from '@angular/common';
import { FormBuilder, FormGroup, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

import { PrivacyPolicyInfoComponent } from '../../../../web/components/privacy-policy/privacy-policy-info/privacy-policy-info.component';
import { TermsAndConditionsInfoComponent } from '../../../../web/components/terms-and-conditions/terms-and-conditions-info/terms-and-conditions-info.component';

import { TranslateService } from '../../../../global/services/translate/translate.service';
import { RegisterService } from '../../../services/register/register.service';
import { AlertService } from '../../../../global/services/alert.service';

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
    NgFor,
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export default class RegisterComponent implements OnInit {
  @Output() prefixChange = new EventEmitter<string>();

  isModalOpen = false;
  modalPart: string | undefined;

  loading: boolean = false;
  form!: FormGroup;
  isPasswordVisible: boolean = false;

  isOpen = false;
  selectedPrefix = '+1';

  prefixOptions = [
    { label: '+1', value: '+1', icon: 'assets/flags/United States.png' },
    { label: '+34', value: '+34', icon: 'assets/flags/Spain.png' },
    { label: '+44', value: '+44', icon: 'assets/flags/United Kingdom.png' },
    { label: '+51', value: '+51', icon: 'assets/flags/Peru.png' },
    { label: '+52', value: '+52', icon: 'assets/flags/Mexico.png' },
    { label: '+54', value: '+54', icon: 'assets/flags/Argentina.png' },
    { label: '+55', value: '+55', icon: 'assets/flags/Brazil.png' },
    { label: '+57', value: '+57', icon: 'assets/flags/Colombia.png' },
    { label: '+351', value: '+351', icon: 'assets/flags/Portugal.png' },
    { label: '+593', value: '+593', icon: 'assets/flags/Ecuador.png' },
  ];

  constructor (
    private formBuilder: FormBuilder,
    private router: Router,

    private translateService: TranslateService,
    private registerService: RegisterService,
    private alertService: AlertService,
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

      prefix: this.selectedPrefix,
      mobile: this.form.value.mobile,

      email: this.form.value.email,
      username: this.form.value.email,  // Se le asigna el correo al username que no genere problema en la base de datos
      password: this.form.value.password,

      language: localStorage.getItem('language'),
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
    var alertBody = null;

    this.registerService.register(body).subscribe({
      next: (response) => {
        alertBody = {
          type: 'okay',
          title: 'congratulations',
          message: response.message,
        }

        this.alertService.showAlert(alertBody);
        this.loading = false;
        this.router.navigate(['auth/login']);
      },
      error: (response) => {
        alertBody = {
          type: 'error',
          title: 'error',
          message: response.error.message,
        }

        this.alertService.showAlert(alertBody);
        this.loading = false;
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

  toggleDropdown() {
    this.isOpen = !this.isOpen;
  }

  selectPrefix(prefix: string) {
    this.selectedPrefix = prefix;
    this.prefixChange.emit(prefix);
    this.isOpen = false;
  }

  getPrefix() {
    const selectedPrefix = this.prefixOptions.find(prefix => prefix.value === this.selectedPrefix);
    return {
      icon: selectedPrefix ? selectedPrefix.icon : '',
      label: selectedPrefix ? selectedPrefix.label : ''
    };
  }
}
