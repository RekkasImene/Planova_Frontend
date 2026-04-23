import { Routes } from '@angular/router';
//import { RouteGuardService } from './service/route-guard.service';
import { Logout } from './components/logout/logout';
import { TasksList } from './components/tasks-list/tasks-list';
import { Home } from './components/home/home';
import { Login } from './components/login/login';
import { Error } from './components/error/error';

export const routes: Routes = [
  { path: '', component: Login },//canActivate, RouteGuardService

  { path: 'login', component: Login },

  { path: 'home', component: Home},

  { path: '**', component: Error }
];
