import { AbstractControl, ValidationErrors } from '@angular/forms';
// import { isString } from '@ng-bootstrap/ng-bootstrap/util/util';

export function gte(control: AbstractControl): ValidationErrors | null {
  const v = control.value;

  if (isNaN(v)) {
    return { gte: true, requiredValue: 10 };
  }

  if (v <= 10) {
    return { gte: true, requiredValue: 10 };
  }

  return null;
}
export function checkName(control: AbstractControl): ValidationErrors | null {
  const name = control.value;

  if (name.length < 3) {
    console.log(name.length < 3);
    return { checkName: true, requiredValue: 10 };
  }

  return null;
}
