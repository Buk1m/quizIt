import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {AuthenticationService} from '../authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {

  loginForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private authenticationService: AuthenticationService, private router: Router) {
    this.loginForm = formBuilder.group(
      {
        email: ['', Validators.required],
        password: ['', Validators.required]
      }
    );
  }

  loginUser(): void {
    this.authenticationService.login({
      EMail: this.loginForm.controls['email'].value.toString().toLocaleLowerCase(),
      Password: this.loginForm.controls['password'].value
    }).subscribe(() => {
      this.router.navigateByUrl('/');
    }, (err) => {
      alert('Invalid email or password.');
      console.log(err);
    });
  }

  // Login form controls template accessors
  get email() {
    return this.loginForm.get('email');
  }

  get password() {
    return this.loginForm.get('password');
  }
}
