import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, tap } from 'rxjs';

import { environment } from '../../../../environments/environment';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = environment.apiUrl;
  private token = 'token';
  private profile = 'profile';

  constructor(
    private http: HttpClient,
    private router: Router,
  ) { }

  login(body: any): Observable<any> {
    return this.http.post<any>(this.apiUrl + 'login/', body).pipe(
      // El tap se ejecuta depués de realizada la petición
      tap(response => {
        if (response) {
          if (response.token)
            localStorage.setItem(this.token, response.token);

          if (response.profile)
            localStorage.setItem(this.profile, JSON.stringify(response.profile));
        }
      })
    );
  }

  logout(): Observable<any> {
    const token = this.getToken();
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);

    return this.http.post<any>(this.apiUrl + 'logout/', {}, { headers }).pipe(
      // El tap se ejecuta depués de realizada la petición
      tap(() => {
        localStorage.removeItem(this.token);
        localStorage.removeItem(this.profile);
        this.router.navigate(['auth/login']);
      })
    );
  }

  private getToken(): string | null {
    if (typeof(window) !== undefined)
      return localStorage.getItem(this.token);
    else
      return null;
  }

  isAuthenticated(): boolean {
    const token = this.getToken();

    if (!token)
      return false;
    else
      return true;  // Borrar el else si se tiene token tipo JWT

    // Esta parte es para token de tipo JWT
    /* const payload = JSON.parse(atob(token.split('.')[1]));  // Recupera el payload del token JWT
    const expired = payload.exp * 1000;   // Para dejarlo en milisegundos
    return Date.now() < expired; */
  }
}
