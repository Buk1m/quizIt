import {Component} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {AuthenticationService} from '../../services/authentication.service';
import {appear, fade} from '../../animations';

declare var $: any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  animations: [appear, fade],
})
export class LoginComponent {

  loginForm: FormGroup;
  errorMessage: string;

  constructor(
    private formBuilder: FormBuilder,
    private authenticationService: AuthenticationService,
    private router: Router) {
    this.loginForm = formBuilder.group(
      {
        username: ['', Validators.required],
        password: ['', Validators.required]
      }
    );
  }

  openModal() {
    $('#loginError').modal('show');
  }

  loginUser(): void {
    this.authenticationService.login({
      EMail: this.username.toString().toLocaleLowerCase(),
      Password: this.password.value
    }).subscribe(() => {
      this.router.navigateByUrl('/');
    }, (err) => {
      this.errorMessage = JSON.parse(err.error).message;
      this.openModal();
    });
  }

  // Login form controls template accessors
  get username() {
    return this.loginForm.get('username');
  }

  get password() {
    return this.loginForm.get('password');
  }
}
