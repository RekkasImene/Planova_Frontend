import {Component, OnInit} from '@angular/core';
import {FormsModule} from "@angular/forms";
import { Router, ActivatedRoute } from '@angular/router';
import { LocalAuthentication } from '../../services/local-authentication';
import { AlertService } from '../../services/alert-service';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login implements OnInit {
  ngOnInit(): void {
    //throw new Error("Method not implemented.");
  }

  username: string = 'irekkas';
  password: string = '';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private auth: LocalAuthentication,
    private alert: AlertService,
  ) {}

  handleLogin(): void {
    if (!this.username || !this.password) {
      this.alert.warning('Veuillez remplir tous les champs');
      return;
    }

    const success = this.auth.authenticate(this.username, this.password);

    if (!success) {
      this.alert.error('Identifiants invalides');
      return;
    }

    this.alert.success('Connexion réussie');

    const returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/home';
    this.router.navigate([returnUrl]);
  }
}
