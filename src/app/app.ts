import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {Header} from '../components/header/header';
import {Footer} from '../components/footer/footer';
import {Alert} from '../components/alert/alert';
import {FormsModule} from "@angular/forms";
import { LocalAuthentication } from '../services/local-authentication';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, Header, Footer, Alert],
  templateUrl: './app.html',
  styles: [],
})
export class App {
  auth = inject(LocalAuthentication);

  constructor() {
    console.log(this.auth);
  }
}
