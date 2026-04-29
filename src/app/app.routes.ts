import { Routes } from '@angular/router';
import { Logout } from '../components/logout/logout';
import { TaskList } from '../components/task-list/task-list';
import { Home } from '../components/home/home';
import { Login } from '../components/login/login';
import { Error } from '../components/error/error';
import { RouteGuard, loginGuard } from '../services/route-guard';

export const routes: Routes = [
  // Public
  { path: 'login', component: Login, canActivate: [loginGuard] },

  // Protected layout
  {
    path: '',
    canActivate: [RouteGuard],
    children: [
      { path: 'home', component: Home },
      { path: 'taskList', component: TaskList },
      { path: 'logout', component: Logout },
      // default logged user
      { path: '', redirectTo: 'home', pathMatch: 'full' },
    ],
  },

  // Default
  { path: '', redirectTo: 'login', pathMatch: 'full' },

  // 404
  { path: '**', component: Error },
];
