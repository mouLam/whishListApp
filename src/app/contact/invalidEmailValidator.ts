import {AbstractControl, ValidationErrors, ValidatorFn} from "@angular/forms";

export function buildInvalidEmailHostValidator(validHosts: string[]) : ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const value = control.value?.toLowerCase();
    if (!value) return null;

    const match = validHosts.some(host => value.endsWith(`@${host}`));

    return !match ? {invalidEmailCustom: true} : null;
  }
}
