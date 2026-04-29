import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AlertService {
  private subject = new Subject<any>();
  alerts$ = this.subject.asObservable();

  success(msg: string) {
    this.subject.next({ type: 'success', msg });
  }

  error(msg: string) {
    this.subject.next({ type: 'error', msg });
  }

  warning(msg: string) {
    this.subject.next({ type: 'warning', msg });
  }
}
