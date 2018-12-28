import {Component} from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {AuthenticationService} from '../../services/authentication.service';
import {appear, fade} from '../../animations';
import {ValidationService} from '../../shared/errors/validation-errors/validation.service';

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
    private validationService: ValidationService,
    private formBuilder: FormBuilder,
    private authenticationService: AuthenticationService,
    private router: Router) {
    this.loginForm = formBuilder.group(
      {
        username: ['', {validators: [Validators.required, Validators.email], updateOn: 'blur'}],
        password: ['', {validators: Validators.required, updateOn: 'blur'}]
      }
    );
  }

  openModal() {
    $('#loginError').modal('show');
  }

  loginUser(): void {
    if (this.loginForm.valid) {
      this.authenticationService.login({
        EMail: this.username.value.toString().toLocaleLowerCase(),
        Password: this.password.value
      }).subscribe(() => {
        this.router.navigateByUrl('/');
      }, (err) => {
        this.errorMessage = JSON.parse(err.error).message;
        this.openModal();
      });
    } else {
      this.validationService.validateAllFormFields(this.loginForm);
    }

  }

  // Login form controls template accessors
  get username(): AbstractControl {
    return this.loginForm.get('username');
  }

  get password(): AbstractControl {
    return this.loginForm.get('password');
  }
}
