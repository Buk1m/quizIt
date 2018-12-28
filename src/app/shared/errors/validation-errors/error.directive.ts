import {Directive, Input, OnInit, TemplateRef, ViewContainerRef} from '@angular/core';
import {ErrorHandler, ValidationErrorsComponent} from './validation-errors.component';

@Directive({
  selector: '[error]',
})
export class ErrorDirective implements OnInit, ErrorHandler {

  @Input()
  private error: string;
  @Input()
  private errorOverride = true;

  private context: any = {};

  constructor(
    private vcRef: ViewContainerRef,
    private templateRef: TemplateRef<any>,
    private validation: ValidationErrorsComponent) {
  }

  ngOnInit(): void {
    if (!this.validation.hasError(this.error) || this.errorOverride) {
      this.validation.registerError(this.error, this);
    }
  }

  show(error: any): void {
    if (!this.vcRef.length) {
      Object.assign(this.context, error);
      this.vcRef.clear();
      this.vcRef.createEmbeddedView(this.templateRef, {$implicit: this.context});
    }
  }

  hide(): void {
    if (this.vcRef.length) {
      this.context = {};
      this.vcRef.clear();
    }
  }
}

