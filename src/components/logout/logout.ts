import { Component, inject } from '@angular/core';
import { LocalAuthentication } from '../../services/local-authentication';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  imports: [],
  templateUrl: './logout.html',
  styleUrl: './logout.css',
})
export class Logout {
  auth = inject(LocalAuthentication);
  router = inject(Router);

  ngOnInit() {
    this.auth.logout();
    this.router.navigate(['/login']);
  }
}
