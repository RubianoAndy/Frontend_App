import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { environment } from '../../../global/utils/environments/environment';
import { TranslatePipe } from '../../../global/pipes/translate/translate.pipe';

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
  currentYear: number = environment.currentYear;
  page: string = environment.site_name;

  constructor() {}

  ngOnInit(): void {
    
  }
}
