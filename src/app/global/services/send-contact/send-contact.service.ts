import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Router } from '@angular/router';
import { environment } from '../../utils/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SendContactService {
  private apiUrl = environment.apiUrl;

  constructor(
    private http: HttpClient,
    private router: Router,
  ) { }

  sendContact(body: any): Observable<any> {
    return this.http.post<any>(this.apiUrl + 'send-contact/', body);
  }
}
