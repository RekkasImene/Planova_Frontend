import { Component } from '@angular/core';
import { Home } from './components/home/home';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Home],
  template: `<app-home></app-home>`,
  styles: [],
})
export class App {
  title = 'Planova';
}
