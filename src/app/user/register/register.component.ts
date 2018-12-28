import {Component} from '@angular/core';
import {AbstractControl, AsyncValidatorFn, FormBuilder, FormControl, FormGroup, ValidationErrors, Validators} from '@angular/forms';
import {Observable} from 'rxjs/internal/Observable';
import {AuthenticationService, TokenPayload} from '../../services/authentication.service';
import {Router} from '@angular/router';
import {of, timer} from 'rxjs';
import {switchMap} from 'rxjs/operators';
import {appear, fade} from '../../animations';
import {ValidationService} from '../../shared/errors/validation-errors/validation.service';

declare var $: any;

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  animations: [appear, fade],
})
export class RegisterComponent {

  registerForm: FormGroup;
  errorMessage: string;

  constructor(
    private validationService: ValidationService,
    private formBuilder: FormBuilder,
    private authenticationService: AuthenticationService,
    private router: Router,
  ) {
    this.registerForm = formBuilder.group({
      password: new FormControl(
        null,
        {
          validators: [
            Validators.required,
            Validators.maxLength(25),
            Validators.minLength(6),
          ], updateOn: 'blur'
        }),
      confirmPassword: new FormControl(
        null,
        {
          validators: [Validators.required],
          asyncValidators: [
            matchingPasswordsValidator(this)
          ], updateOn: 'blur'
        }),
      email: new FormControl(
        null,
        {
          validators: [
            Validators.maxLength(255),
            Validators.required, Validators.email
          ], updateOn: 'blur'
        }
      )
    });

    this.registerForm.controls['password'].valueChanges
      .subscribe(() => this.registerForm.controls['confirmPassword'].updateValueAndValidity());

  }

  openModal() {
    $('#registerError').modal('show');
  }

  register() {
    if (this.registerForm.valid) {


      const tokenPayload: TokenPayload = {
        EMail: this.registerForm.controls['email'].value.toString().toLocaleLowerCase(),
        Password: this.registerForm.controls['password'].value,
      };

      this.authenticationService.register(tokenPayload)
        .subscribe((res) => {
          if (res.id) {
            this.router.navigateByUrl('/login');
          }
        }, (err) => {
          this.errorMessage = JSON.parse(err.error).message;
          this.openModal();
        });
    } else {
      this.validationService.validateAllFormFields(this.registerForm);
    }
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
        if (control.value !== test.registerForm.controls['password'].value) {
          return of({MatchPassword: true});
        } else {
          return of(null);
        }
      }));
  };
}




