import {Component, Input, OnChanges, SimpleChanges} from '@angular/core';

@Component({
  selector: 'val-err',
  templateUrl: './validation-errors.component.html',
})
export class ValidationErrorsComponent implements OnChanges {
  private handlers: { [name: string]: ErrorHandler } = {};
  private _errors: any;
  private _touched: boolean;

  @Input()
  errors: any;
  @Input()
  touched: boolean;

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.errors) {
      this._errors = changes.errors.currentValue;
    }

    if (changes.touched) {
      this._touched = changes.touched.currentValue;
    }

    let showError: string = null;

    if (this._errors && this._touched) {
      showError = Object.keys(this._errors)[0];
    }

    for (const error in this.handlers) {
      if (this.handlers.hasOwnProperty(error)) {
        if (error === showError) {
          this.handlers[error].show(this._errors[error]);
        } else {
          this.handlers[error].hide();
        }
      }
    }
  }

  registerError(name: string, handler: ErrorHandler): void {
    this.handlers[name] = handler;
  }

  hasError(name: string): boolean {
    return this.handlers[name] != null;
  }

}

export interface ErrorHandler {
  show(error: string);

  hide();
}
