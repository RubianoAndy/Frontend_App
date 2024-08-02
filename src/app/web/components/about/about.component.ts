import { Component } from '@angular/core';
import { NavbarComponent } from '../../../global/components/navbar/navbar.component';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [
    NavbarComponent
  ],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export default class AboutComponent {

}
