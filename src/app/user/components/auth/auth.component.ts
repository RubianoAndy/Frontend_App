import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { environment } from '../../../../environments/environment';
import { TranslatePipe } from '../../../../translate/translate.pipe';

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [
    RouterOutlet,
    TranslatePipe
  ],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.css'
})
export class AuthComponent implements OnInit {
  language: 'en' | 'es' = 'es';
  
  currentYear: number = environment.currentYear;
  page: string = environment.site_name;

  constructor() {}

  ngOnInit(): void {
    
  }
}
