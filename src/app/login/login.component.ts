import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {AuthenticationService} from '../authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private authenticationService: AuthenticationService, private router: Router) {
    this.loginForm = formBuilder.group(
      {
        email: ['', Validators.required],
        password: ['', Validators.required]
      }
    );
  }

  ngOnInit() {
  }

  loginUser(): void {
    this.authenticationService.login({
      email: this.loginForm.controls['email'].value.toString().toLocaleLowerCase(),
      password: this.loginForm.controls['password'].value
    }).subscribe(() => {
      this.router.navigateByUrl('/');
    }, (err) => {
      alert('Invalid email or password.');
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
