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
    return localStorage.getItem(this.token);
  }

  // ESTA FUNCIÓN ES PARA VERIFICAR CUANDO SE VENCE EL TOKEN JWT
  /* isAuthenticated(): boolean {
    const token = this.getToken();

    if (!token)
      return false;

    const payload = JSON.parse(atob(token.split('.')[1]));  // Recupera el payload del token JWT
    const expired = payload.exp * 1000;   // Para dejarlo en milisegundos
    return Date.now() < expired;
  } */
}
