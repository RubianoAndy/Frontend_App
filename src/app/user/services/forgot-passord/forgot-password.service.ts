import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '../../../global/utils/environments/environment';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ForgotPasswordService {
  private apiUrl = environment.apiUrl;

  constructor(
    private http: HttpClient,
    private router: Router,
  ) { }

  generateCode(body: any): Observable<any> {
    return this.http.post<any>(this.apiUrl + 'generate_code/', body);
  }

  changePasswordFromCode(body: any): Observable<any> {
    return this.http.post<any>(this.apiUrl + 'change_password_from_code/', body);
  }
}
