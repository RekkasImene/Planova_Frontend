import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LocalAuthentication {
  private _isLoggedIn = signal(this.hasUser());

  authenticate(username: string, password: string): boolean {
    if (!username.trim() || !password.trim()) {
      return false;
    }

    sessionStorage.setItem('authenticaterUser', username);
    this._isLoggedIn.set(true);
    return true;
  }

  logout() {
    sessionStorage.removeItem('authenticaterUser');
    this._isLoggedIn.set(false);
  }

  isUserLoggedIn() {
    return this._isLoggedIn();
  }

  private hasUser(): boolean {
    return sessionStorage.getItem('authenticaterUser') !== null;
  }

  getUsername(): string | null {
    return sessionStorage.getItem('authenticaterUser');
  }
}
