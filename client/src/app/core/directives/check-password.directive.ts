import { Validator, AbstractControl, NG_VALIDATORS } from '@angular/forms';
import { Directive } from '@angular/core';

@Directive({
  selector: '[appCheckPassword]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: CheckPasswordDirective,
      multi: true
    }
  ]
})
export class CheckPasswordDirective implements Validator {

  validate(control: AbstractControl) {
    return control.value["password"] !== control.value["repeatPassword"]
      ? { invalidPasswordMatch: true } : null;
  }
}
