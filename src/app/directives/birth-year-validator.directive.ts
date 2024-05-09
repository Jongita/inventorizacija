import { Directive } from '@angular/core';
import { AbstractControl, ValidationErrors } from '@angular/forms';


@Directive({
  selector: '[appBirthYearValidator]',
  standalone: true
})
export class BirthYearValidatorDirective {

  constructor() { }

  validate(control: AbstractControl<any, any>): ValidationErrors | null {
    const birthYear:number=control.value;
    const thisYear=(new Date()).getFullYear();
    if (birthYear<1900 || birthYear> thisYear-18){
      return { error:"Neteisingi metai"};
    }else{
      return null;
    }
  }
 

}
