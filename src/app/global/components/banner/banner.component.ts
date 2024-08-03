import { Component } from '@angular/core';
import { NgClass, NgFor, NgIf, NgStyle } from '@angular/common';

@Component({
  selector: 'app-banner',
  standalone: true,
  imports: [
    NgClass,
    NgFor,
    NgIf,
    NgStyle
  ],
  templateUrl: './banner.component.html',
  styleUrl: './banner.component.css'
})
export class BannerComponent {
  
}
