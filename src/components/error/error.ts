import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { LocalAuthentication } from '../../services/local-authentication';

@Component({
  selector: 'app-error',
  imports: [RouterModule],
  templateUrl: './error.html',
  styleUrl: './error.css',
})
export class Error {
  auth = inject(LocalAuthentication);
  code = 404;

  constructor(private route: ActivatedRoute) {
    const param = this.route.snapshot.queryParams['code'];
    if (param) this.code = param;
  }
}
