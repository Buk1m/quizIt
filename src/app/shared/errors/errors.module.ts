import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {ErrorDirective} from './validation-errors/error.directive';
import {ValidationErrorsComponent} from './validation-errors/validation-errors.component';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    ValidationErrorsComponent,
    ErrorDirective,
  ],
  exports: [
    ValidationErrorsComponent,
    ErrorDirective,
  ],
})
export class ErrorsModule {
}
