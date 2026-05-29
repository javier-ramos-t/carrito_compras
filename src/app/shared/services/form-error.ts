import { Injectable } from '@angular/core';
import { AbstractControl } from '@angular/forms'

@Injectable({
  providedIn: 'root',
})
export class FormErrorService {

  public getFieldError(control:AbstractControl | null): string | null{
    if(!control?.errors){
      return null
    }

    if(control?.errors?.['required']){
      return 'Campo Obligatorio'
    }

    if(control?.errors?.['minlength']){
      return 'Minimo ' + control.errors['minlength'].requiredLength + ' caracteres'
    }

    if(control?.errors?.['maxlength']){
      return 'Maximo ' + control.errors['maxlength'].requiredLength + ' caracteres'
    }

    if(control?.errors?.['min']){
      return 'El valor debe ser mayor o igual a ' + control.errors['min'].min
    }

    return null
  


  }

}
