import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {Observable} from 'rxjs';
import {Router} from '@angular/router';

export interface UserDetails {
  _id: string;
  username: string;
  email: string;
  exp: number;
  iat: string;
}

export class User {
  email: string;
  password: string;
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

  saveToken(tokenResponse: TokenResponse): void {
    localStorage.setItem('mean-token', tokenResponse.token);
    this.token = tokenResponse.token;
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

  register(user: User): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      })
    };
    console.log(JSON.stringify(user));
    return this.http.post<User>('http://localhost:57900/api/users/register', JSON.stringify(user), httpOptions);
  }

  login(tokenPayload: User): Observable<any> {
    return this.http.post('/api/login', tokenPayload).pipe(map((res: TokenResponse) => {
      this.saveToken(res);
      return res;
    }));
  }

  profile(): Observable<any> {
    return this.http.get(`/api/profile`, {headers: {Authorization: `Bearer ${this.getToken()}`}});
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
