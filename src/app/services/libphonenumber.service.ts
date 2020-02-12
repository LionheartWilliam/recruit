import { Injectable } from '@angular/core';
import { ValidatorFn, AbstractControl } from '@angular/forms';
import { PhoneNumberUtil, PhoneNumber } from '../../../node_modules/google-libphonenumber';
import { from } from 'rxjs';

const phoneNumberUtil = PhoneNumberUtil.getInstance();

@Injectable({
  providedIn: 'root'
})

export class LibphonenumberService {

  constructor() { }
  PhoneNumberValidator(regionCode?: string ): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } => {
      let validNumber = false;
      try {
        const phoneNumber = phoneNumberUtil.parseAndKeepRawInput(
          control.value, regionCode
        );
        validNumber = phoneNumberUtil.isValidNumber(phoneNumber);
      } catch (e) { }
  
      return validNumber ? null : { 'wrongNumber': { value: control.value } };
    }
  }
}

