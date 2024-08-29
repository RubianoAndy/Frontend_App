import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgClass, NgIf } from '@angular/common';

import { NavbarComponent } from '../../../global/components/navbar/navbar.component';
import { BannerComponent } from '../../../global/components/banner/banner.component';
import { FooterComponent } from '../../../global/components/footer/footer.component';

import { environment } from '../../../global/utils/environments/environment';

import { SendContactService } from '../../../global/services/send-contact/send-contact.service';
import { AlertService } from '../../../global/services/alert/alert.service';
import { TranslateService } from '../../../global/services/translate/translate.service';
import { LoadingService } from '../../../global/services/loading/loading.service';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    NavbarComponent,
    BannerComponent,
    FooterComponent,
    NgClass,
    NgIf,
  ],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export default class ContactComponent implements OnInit {
  form!: FormGroup;
  bannerUrl: string = 'assets/images/landingpage/Banner/Contact.jpg';
  email = environment.email;

  constructor (
    private formBuilder: FormBuilder,
    private translateService: TranslateService,

    private sendContactService: SendContactService,
    private alertService: AlertService,
    private loadingService: LoadingService,
  ) {
    
  }
  
  ngOnInit(): void {
    this.createForm();
  }

  createForm(data: any = null) {
    data = data || {
      name: '',
      email: '',
      subject: '',
      message: '',
    }

    this.form = this.formBuilder.group({
      name: [data.name, [ Validators.required, Validators.minLength(2), Validators.maxLength(100) ]],
      email: [data.email, [ Validators.required, Validators.email, Validators.minLength(6), Validators.maxLength(100) ]],
      subject: [data.subject, [ Validators.required, Validators.minLength(5), Validators.maxLength(35) ]],
      message: [data.message, [ Validators.required, Validators.minLength(20), Validators.maxLength(1000) ]],
    });
  }

  onSubmit() {
    var body = {
      name: this.form.value.name,
      email: this.form.value.email,
      subject: this.form.value.subject,
      message: this.form.value.message,
    };

    if (this.form.valid && body)
      this.sendContact(body);
  }

  sendContact(body: any): void {
    this.loadingService.show();
    var alertBody = null;

    this.sendContactService.sendContact(body).subscribe({
      next: (response) => {
        alertBody = {
          type: 'okay',
          title: 'message sent successfully',
          message: response.message,
        }

        this.alertService.showAlert(alertBody);
        this.form.reset();
        this.loadingService.hide();
      },
      error: (response) => {
        alertBody = {
          type: 'error',
          title: 'message could not be sent',
          message: response.error.message,
        }

        this.alertService.showAlert(alertBody);
        this.loadingService.hide();
      }
    });
  }

  getTranslation(key: string): string {
    return this.translateService.translate(key);
  }
}
