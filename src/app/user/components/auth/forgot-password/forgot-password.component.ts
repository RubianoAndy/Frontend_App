import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgClass, NgIf } from '@angular/common';
import { Router, RouterLink } from '@angular/router';

import { ForgotPasswordService } from '../../../services/forgot-passord/forgot-password.service';
import { TranslateService } from '../../../../global/services/translate/translate.service';
import { AlertService } from '../../../../global/services/alert.service';

@Component({
  selector: 'app-forgot-password',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    RouterLink,
    NgClass,
    NgIf,
  ],
  templateUrl: './forgot-password.component.html',
  styleUrl: './forgot-password.component.css'
})
export default class ForgotPasswordComponent implements OnInit{  
  loading: boolean = false;

  form_status: string = 'Send email'; // 'Send code and password'
  form_1!: FormGroup;
  form_2!: FormGroup;

  isPasswordVisible: boolean = false;

  user_id: number = 0;

  constructor (
    private formBuilder: FormBuilder,
    private router: Router,
    
    private translateService: TranslateService,
    private forgotPasswordService: ForgotPasswordService,
    private alertService: AlertService,
  ) {

  }

  ngOnInit(): void {
    this.createForm1();
    this.createForm2();
  }

  createForm1(data: any = null) {
    data = data || {
      email: '',
    }

    this.form_1 = this.formBuilder.group({
      email: [data.email, [ Validators.required, Validators.email, Validators.minLength(6), Validators.maxLength(100) ]],
    });
  }

  createForm2(data: any = null) {
    data = data || {
      code_1: null,
      code_2: null,
      code_3: null,
      code_4: null,
      code_5: null,
      code_6: null,

      new_password: '',
    }

    this.form_2 = this.formBuilder.group({
      code_1: [data.code_1, [ Validators.required ]],
      code_2: [data.code_2, [ Validators.required ]],
      code_3: [data.code_3, [ Validators.required ]],
      code_4: [data.code_4, [ Validators.required ]],
      code_5: [data.code_5, [ Validators.required ]],
      code_6: [data.code_6, [ Validators.required ]],
      
      new_password: [data.new_password, [ Validators.required, Validators.minLength(6), Validators.maxLength(20) ]],
    });
  }

  onSubmitForm1() {
    var body = {
      email: this.form_1.value.email,
      language: localStorage.getItem('language'),
    };
    
    if (this.form_1.valid && body) {
      this.loading = true;
      this.generateCode(body);
    }
  }

  onSubmitForm2() {
    var total_codes = 6;    // Cantidad de dígitos a llenar en el formulario
    var code = '';

    for (var i = 0; i < total_codes; i++){
      var name = 'code_' + (i + 1);
      code += this.form_2.value[name];
    }

    var body = {
      user_id: this.user_id,  // (this.user_id != 0) ? this.user_id : null
      code: code,
      new_password: this.form_2.value.new_password,
      language: localStorage.getItem('language'),
    };

    if (this.form_2.valid && body) {
      this.loading = true;
      this.changePasswordFromCode(body);
    }
  }

  generateCode(body: any): void {
    var alertBody = null;

    this.forgotPasswordService.generateCode(body).subscribe({
      next: (response) => {
        this.user_id = response.user_id;

        alertBody = {
          type: 'okay',
          title: 'check your email',
          message: response.message,
        }

        this.alertService.showAlert(alertBody);
        this.loading = false;
        this.form_status = 'Send code and password';
      },
      error: (response) => {
        alertBody = {
          type: 'warning',
          title: 'warning',
          message: response.error.message,
        }

        this.alertService.showAlert(alertBody);
        this.loading = false;

        // Resetear el formulario form_1 y poner una aleta de error visual
      }
    });
  }

  changePasswordFromCode(body: any): void {
    this.forgotPasswordService.changePasswordFromCode(body).subscribe({
      next: () => {
        this.loading = false;
        this.router.navigate(['auth/login']);
      },
      error: (err) => {
        this.loading = false;
        console.error('error: ', err);
        this.form_status = 'Send email';

        // Resetear el formulario form_2 y poner una aleta de error visual
      }
    });
  }

  togglePasswordVisibility(): void {
    this.isPasswordVisible = !this.isPasswordVisible;
  }

  focusNextInput(event: Event, nextInputId: string | null): void {
    const input = event.target as HTMLInputElement;
    if (input.value.length === input.maxLength && nextInputId) {
      const nextInput = document.getElementById(nextInputId);
      nextInput?.focus();
    }
  }

  handlePaste(event: ClipboardEvent): void {
    const pasteData = event.clipboardData?.getData('text') || '';
    if (pasteData.length === 6) {
      for (var i = 0; i < pasteData.length; i++){
        var name = 'code_' + (i + 1);
        this.form_2.controls[name].setValue(pasteData.charAt(i));
      }
      (document.getElementById('code_6') as HTMLInputElement)?.focus();
      
      event.preventDefault();
    }
  }

  handleKeyDown(event: KeyboardEvent, prevInputId: string | null): void {
    const input = event.target as HTMLInputElement;
    if (event.key === 'Backspace' && input.value.length === 0 && prevInputId) {
      const prevInput = document.getElementById(prevInputId) as HTMLInputElement;
      prevInput.focus();
      prevInput.value = '';  // Borrar el valor anterior
      event.preventDefault();
    }
  }

  getTranslation(key: string): string {
    return this.translateService.translate(key);
  }
}
