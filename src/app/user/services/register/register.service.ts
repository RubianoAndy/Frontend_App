import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';

import { environment } from '../../../utils/environments/environment';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  private apiUrl = environment.apiUrl;

  constructor(
    private http: HttpClient,
    private router: Router,
  ) { }

  register(body: any): Observable<any> {
    return this.http.post<any>(this.apiUrl + 'register/', body).pipe(
      // El tap se ejecuta depués de realizada la petición
      tap(response => {
        if (response.token)
          this.router.navigate(['auth/login']);
      })
    );
  }
}
