import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';

import { environment } from '../../../../environments/environment';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = environment.apiUrl;
  private token = 'token';

  constructor(
    private http: HttpClient,
    private router: Router,
  ) { }

  login(email: string, password: string): Observable<any> {
    // return this.http.post(this.apiUrl + 'login/', { email, password });

    // Esto de acá abajo permite imprimir luego de que se consuma el API
    return this.http.post<any>(this.apiUrl + 'login/', { email, password }).pipe(
      tap(response => {
        if (response.token)
          this.setToken(response.token);
      })
    );
  }

  logout(): void {
    localStorage.removeItem(this.token);
    this.router.navigate(['auth/login']);
  }

  private setToken(token: string): void {
    localStorage.setItem(this.token, token);
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
