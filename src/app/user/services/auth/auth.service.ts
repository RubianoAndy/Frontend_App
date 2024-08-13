import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, tap } from 'rxjs';

import { environment } from '../../../global/utils/environments/environment';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = environment.apiUrl;
  private accessTokenKey = 'access_token';
  private refreshTokenKey = 'refresh_token';
  private profile = 'profile';

  constructor(
    private http: HttpClient,
    private router: Router,
  ) { }

  login(body: any): Observable<any> {
    return this.http.post<any>(this.apiUrl + 'login/', body).pipe(
      // El tap se ejecuta depués de realizada la petición
      tap(response => {
        if (response.access_token) {
          localStorage.setItem(this.accessTokenKey, response.access_token);
          if (response.refresh_token) {
            localStorage.setItem(this.refreshTokenKey, response.refresh_token);
            if (response.profile) {
              localStorage.setItem(this.profile, JSON.stringify(response.profile));
              this.autoRefreshToken();
            }
          }
        }
      })
    );
  }

  logout(): Observable<any> {
    const accessToken = this.getAccessToken();
    const refreshToken = this.getRefreshToken();

    const body = {
      access_token: accessToken,
      refresh_token: refreshToken,
    };

    return this.http.post<any>(this.apiUrl + 'logout/', body).pipe(
      // El tap se ejecuta depués de realizada la petición
      tap(() => {
        localStorage.removeItem(this.accessTokenKey);
        localStorage.removeItem(this.refreshTokenKey);
        localStorage.removeItem(this.profile);
        this.router.navigate(['auth/login']);
      })
    );
  }

  private getAccessToken(): string | null {
    if (typeof(window) !== undefined)
      return localStorage.getItem(this.accessTokenKey);
    else
      return null;
  }

  private getRefreshToken(): string | null {
    if (typeof(window) !== undefined)
      return localStorage.getItem(this.refreshTokenKey);
    else
      return null;
  }

  refreshToken(): Observable<any> {
    const refreshToken = this.getRefreshToken();

    const body = {
      refresh_token: refreshToken,
    };

    return this.http.post<any>(this.apiUrl + 'refresh-token/', body).pipe(
      // El tap se ejecuta depués de realizada la petición
      tap(response => {
        if (response.access_token) {
          localStorage.setItem(this.accessTokenKey, response.access_token);
          if (response.refresh_token) {
            localStorage.setItem(this.refreshTokenKey, response.refresh_token);
            this.autoRefreshToken();
          }
        }
      })
    );
  }

  autoRefreshToken(): void {
    const token = this.getAccessToken();

    if (!token)
      return;

    const payload = JSON.parse(atob(token.split('.')[1]));
    const expired = payload.exp * 1000;   // Para dejarlo en milisegundos
    
    const timeout = expired - Date.now() - (60 * 1000);

    setTimeout(() => {
      this.refreshToken().subscribe()
    }, timeout);
  }

  isAuthenticated(): boolean {
    const token = this.getAccessToken();

    if (!token)
      return false;

    const payload = JSON.parse(atob(token.split('.')[1]));
    const expired = payload.exp * 1000;   // Para dejarlo en milisegundos
    return Date.now() < expired;
  }
}
