import {Component} from '@angular/core';
import {AbstractControl, AsyncValidatorFn, FormBuilder, FormGroup, ValidationErrors, Validators} from '@angular/forms';
import {Observable} from 'rxjs/internal/Observable';
import {catchError, mapTo, switchMap} from 'rxjs/operators';
import {AuthenticationService, TokenPayload} from '../authentication.service';
import {Router} from '@angular/router';
import {of, timer} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {

  registerForm: FormGroup;
  errorMessage: string;

  constructor(
    private formBuilder: FormBuilder,
    private authenticationService: AuthenticationService,
    private router: Router,
    private http: HttpClient
  ) {
    this.registerForm = formBuilder.group({
      password: [
        '', [
          Validators.required,
          Validators.maxLength(25),
          Validators.minLength(6)
        ]
      ], confirmPassword: [
        '', {
          validators: [Validators.required],
          asyncValidators: [
            matchingPasswordsValidator(this)
          ]
        }
      ], email: [
        '', [
          Validators.maxLength(255),
          Validators.required, Validators.email
        ]
      ]
    },);

    this.registerForm.controls['password'].valueChanges
      .subscribe(() => this.registerForm.controls['confirmPassword'].updateValueAndValidity());

  }

  register() {
    const tokenPayload: TokenPayload = {
      password: this.registerForm.controls['password'].value,
      email: this.registerForm.controls['email'].value.toString().toLocaleLowerCase(),
    };

    this.authenticationService.register(tokenPayload)
      .subscribe((res) => {
        if (res.token) {
          this.router.navigateByUrl('/');
        }
      }, (err) => {
        console.log(JSON.stringify(err));
        this.errorMessage = err.error.error.message;
        alert(this.errorMessage);
      });
  }

  // Accessors for form controls
  get email() {
    return this.registerForm.get('email');
  }

  get password() {
    return this.registerForm.get('password');
  }

  get confirmPassword() {
    return this.registerForm.get('confirmPassword');
  }

}

export function matchingPasswordsValidator(test: RegisterComponent): AsyncValidatorFn {
  return (control: AbstractControl): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> => {
    return timer(500)
      .pipe(switchMap(() => {
        if (control.value != test.registerForm.controls['password'].value) {
          return of({MatchPassword: true});
        } else {
          return of(null);
        }
      }));
  };
}




