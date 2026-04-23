import {Component, OnInit} from '@angular/core';
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-login',
  imports: [
    FormsModule,
  ],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login implements OnInit {

  ngOnInit(): void {
      //throw new Error("Method not implemented.");
  }

  username: string = 'irekkas';
  password: string = '';
  errorMessage: string = 'Invalid Credentials';
  invalidLogin: boolean = false;

  handleLogin(): void {
    if (!this.username.trim() || !this.password.trim()) {
      this.invalidLogin = true;
    }else {

    }
  }
}
