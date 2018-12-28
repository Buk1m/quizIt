import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {Observable, of} from 'rxjs';
import {Router} from '@angular/router';

export interface UserDetails {
  nameid: string;
  unique_name: string;
  exp: number;
}

export class TokenPayload {
  EMail: string;
  Password: string;
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

  public isLoggedIn(): boolean {
    const user = this.getUserDetails();
    if (user) {
      return user.exp > Date.now() / 1000;
    } else {
      return false;
    }
  }

  profile(): Observable<any> {
    return of(this.getUserDetails());
    // FIXME: request data when endpoint will be added on server side
    // return this.http.get(`/api/profile`, {headers: {Authorization: `Bearer ${this.getToken()}`}});
  }
}
