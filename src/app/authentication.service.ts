import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {Observable, pipe} from 'rxjs';
import {Router} from '@angular/router';
import {ResponseContentType} from '@angular/http';
import {text} from '@angular/core/src/render3';

export interface UserDetails {
  _id: string;
  username: string;
  email: string;
  exp: number;
  iat: string;
}

export class TokenPayload {
  EMail: string;
  Password: string;
}

export interface TokenResponse {
  token: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  token: string;

  constructor(private http: HttpClient, private router: Router) {
  }

  saveToken(tokenResponse): void {
    localStorage.setItem('mean-token', tokenResponse);
    this.token = tokenResponse;
  }

  getToken(): string {
    if (!this.token) {
      this.token = localStorage.getItem('mean-token');
    }
    return this.token;
  }

  logout(): void {
    this.token = '';
    localStorage.removeItem('mean-token');
    this.router.navigateByUrl('/');
  }

  getUserDetails(): UserDetails {
    const token = this.getToken();
    let payload: string;
    if (token) {
      payload = token.split('.')[1];
      payload = window.atob(payload);
      return JSON.parse(payload);
    } else {
      return null;
    }
  }

  register(tokenPayload: TokenPayload): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      })
    };
    return this.http.post('http://quizit.azurewebsites.net/api/users/register', tokenPayload, httpOptions).pipe(map((res) => {
      if (res) {
        return res;
      }
    }));
  }

  login(tokenPayload: TokenPayload): Observable<any> {
    return this.http.post('http://quizit.azurewebsites.net/api/users/authenticate', tokenPayload, {responseType: 'text'})
      .pipe(map((res) => {
        console.log(res);
        this.saveToken(res);
        return res;
      }));
  }

  profile(): Observable<any> {
    let test = this.http.get('http://quizit.azurewebsites.net/api/quizs');
    return test;

  }

  public isLoggedIn(): boolean {
    const user = this.getUserDetails();
    if (user) {
      return user.exp > Date.now() / 1000;
    } else {
      return false;
    }
  }
}
