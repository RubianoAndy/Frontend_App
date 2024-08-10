import { NgClass, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dark-mode-toggle',
  standalone: true,
  imports: [
    NgClass,
    NgIf,
  ],
  templateUrl: './dark-mode-toggle.component.html',
  styleUrl: './dark-mode-toggle.component.css'
})
export class DarkModeToggleComponent implements OnInit {
  isDarkMode: boolean | undefined;

  ngOnInit() {
    const theme = localStorage.getItem('theme');
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
      this.isDarkMode = true;
    } else {
      document.documentElement.classList.remove('dark');
      this.isDarkMode = false;
    }
  }

  toggleDarkMode() {
    const htmlElement = document.documentElement;

    if (htmlElement.classList.contains('dark')) {
      htmlElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
      this.isDarkMode = false;
    } else {
      htmlElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
      this.isDarkMode = true;
    }
  }
}
