import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AlertService {
  private alert = new Subject<any>();
  alertMessage = this.alert.asObservable();
  
  constructor() { }

  showAlert(message: any): void {
    this.alert.next(message);
  }
}
