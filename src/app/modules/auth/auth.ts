import { Component, inject } from '@angular/core';
import { AuthService } from '@core/service/auth'
import { AuthResponse } from '@modules/auth/models/auth.models';
import { Router } from '@angular/router';

import { ReactiveFormsModule, FormBuilder, Validators  } from '@angular/forms'
import { FormErrorService } from '@shared/services/form-error';
 
@Component({
  selector: 'app-auth',
  imports: [ReactiveFormsModule],
  templateUrl: './auth.html',
  styleUrl: './auth.css',
})
export class Auth{
private authService = inject(AuthService)
private router = inject(Router);
private fb = inject(FormBuilder);
private formErrorService = inject(FormErrorService);

public loginForm = this.fb.nonNullable.group({
  username:['', [Validators.required,Validators.minLength(3),Validators.maxLength(10)]],
  password:['', Validators.required]
}
)

public login(): void{
  console.log(this.loginForm)
  if(this.loginForm.invalid){
    return;
  }

  const formValues = this.loginForm.getRawValue()

  this.authService.login(
    formValues.username,
    formValues.password
  ).subscribe((response:AuthResponse)=>{
    if (response.access) {
      this.router.navigate(['/productos'])
    }
  })


  
}

public isFieldInvalid(field: string): boolean{
  const control = this.loginForm.get(field)

  return !!(
    control && control.invalid && 
    (control.touched || control.dirty)
  )
}

public getFieldError(field: string): string | null{

  const control = this.loginForm.get(field)

  return this.formErrorService.getFieldError(control)

}


}
