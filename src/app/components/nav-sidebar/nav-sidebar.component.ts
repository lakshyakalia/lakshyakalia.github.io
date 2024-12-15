import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-sidebar',
  templateUrl: './nav-sidebar.component.html',
  styleUrls: ['./nav-sidebar.component.scss'],
})
export class NavSidebarComponent implements OnInit {
  name: string = 'Lakshya Kalia';

  ngOnInit() {
    this.name = this.name.toLocaleUpperCase();
    // Load the theme preference from localStorage
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }

  // Method to toggle dark mode
  toggleDarkMode(event: Event): void {
    const checkbox = event.target as HTMLInputElement;
    if (checkbox.checked) {
      // Enable dark mode
      document.body.classList.add('dark-mode');
      localStorage.setItem('theme', 'dark');
    } else {
      // Disable dark mode
      document.body.classList.remove('dark-mode');
      localStorage.setItem('theme', 'light');
    }
  }
}
