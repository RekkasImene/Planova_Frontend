import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { LocalAuthentication } from '../../services/local-authentication';


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header implements OnInit {
  isDropdownOpen = false;
  userName = 'Imene REKKAS';
  userEmail = 'rekkas.imen@gmail.com';
  userAvatar = 'https://api.dicebear.com/7.x/avataaars/svg?seed=Felix';
  auth = inject(LocalAuthentication);


  constructor(private router: Router) {
    this.router = inject(Router);
  }

  ngOnInit(): void {}

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
    this.auth.logout();
    this.router.navigate(['/login']);
  }
}
