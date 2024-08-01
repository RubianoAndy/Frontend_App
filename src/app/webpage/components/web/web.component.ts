import { Component } from '@angular/core';
import { NavbarComponent } from './shared/navbar/navbar.component';
@Component({
  selector: 'app-web',
  standalone: true,
  imports: [
    NavbarComponent
  ],
  templateUrl: './web.component.html',
  styleUrl: './web.component.css'
})
export default class WebComponent {

}
