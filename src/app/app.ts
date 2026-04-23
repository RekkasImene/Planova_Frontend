import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Home } from './components/home/home';
import { Login } from './components/login/login';
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    Home,
    Login,
    FormsModule,
  ],
  template: `<router-outlet></router-outlet>`,
  styles: [],
})
export class App {
  title = 'Planova';
}
