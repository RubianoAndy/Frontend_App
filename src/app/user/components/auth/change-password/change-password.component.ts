import { Component, OnInit } from '@angular/core';
import { TranslatePipe } from '../../../../../translate/translate.pipe';

@Component({
  selector: 'app-change-password',
  standalone: true,
  imports: [
    TranslatePipe
  ],
  templateUrl: './change-password.component.html',
  styleUrl: './change-password.component.css'
})
export default class ChangePasswordComponent implements OnInit{
  language: 'en' | 'es' = 'es';

  constructor () {}

  ngOnInit(): void {
    
  }
}
