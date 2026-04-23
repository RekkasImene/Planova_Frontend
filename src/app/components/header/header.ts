import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  isDropdownOpen = false;
  userName = 'Imene REKKAS';
  userEmail = 'rekkas.imen@gmail.com';
  userAvatar = 'https://api.dicebear.com/7.x/avataaars/svg?seed=Felix';

  constructor(private router: Router) {}

  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }

  closeDropdown() {
    this.isDropdownOpen = false;
  }

  goToProfile() {
    this.closeDropdown();
    this.router.navigate(['/profile']);
  }

  goToSettings() {
    this.closeDropdown();
    this.router.navigate(['/settings']);
  }

  logout() {
    this.closeDropdown();
    this.router.navigate(['/login']);
  }
}
