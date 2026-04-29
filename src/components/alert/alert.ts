import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlertService } from '../../services/alert-service';

@Component({
  selector: 'app-alert',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './alert.html',
})
export class Alert implements OnInit {

  alerts: any[] = [];

  constructor(private alertService: AlertService) {}

  ngOnInit() {
    this.alertService.alerts$.subscribe(alert => {
      this.alerts.push(alert);

      // auto remove après 3s
      setTimeout(() => {
        this.alerts.shift();
      }, 3000);
    });
  }
}
