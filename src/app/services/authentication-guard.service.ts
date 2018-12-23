import {Injectable} from '@angular/core';
import {AuthenticationService} from './authentication.service';
import {CanActivate, Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationGuardService implements CanActivate {
  constructor(public auth: AuthenticationService, public router: Router) {
  }

  canActivate(): boolean {
    if (!this.auth.isLoggedIn()) {
      this.router.navigate(['login']);
      return false;
    }
    return true;
  }
}
