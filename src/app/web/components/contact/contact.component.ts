import { Component } from '@angular/core';
import { NavbarComponent } from '../../../shared/components/navbar/navbar.component';
import { TranslatePipe } from '../../../../translate/translate.pipe';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [
    NavbarComponent,
    TranslatePipe,
  ],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export default class ContactComponent {

}
