import { Injectable } from '@angular/core';
import { FormControl, FormGroup, ValidationErrors } from '@angular/forms';

@Injectable({providedIn: 'root'})
export class ValidatorsService {

  public raceTimePattern: string = "^[0-9][0-9]:?[0-5][0-9]:?[0-5][0-9]";

  public isValidField(form: FormGroup, field: string){
    return form.controls[field].errors && form.controls[field].touched;
  }
}
