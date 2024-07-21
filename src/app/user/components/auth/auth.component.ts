import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [
    RouterOutlet
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