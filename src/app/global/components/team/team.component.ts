import { Component, Input } from '@angular/core';
import { NgIf } from '@angular/common';
import { TranslatePipe } from '../../pipes/translate/translate.pipe';

@Component({
  selector: 'app-team',
  standalone: true,
  imports: [
    NgIf,
    TranslatePipe,
  ],
  templateUrl: './team.component.html',
  styleUrl: './team.component.css'
})
export class TeamComponent {
  @Input() member: any;
}
