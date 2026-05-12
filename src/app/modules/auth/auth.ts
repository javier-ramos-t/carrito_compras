import { Component, inject } from '@angular/core';
import { AuthService } from '@core/service/auth'
import { AuthResponse } from '@modules/auth/models/auth.models';

@Component({
  selector: 'app-auth',
  imports: [],
  templateUrl: './auth.html',
  styleUrl: './auth.css',
})
export class Auth {
private authService = inject(AuthService)

public login(username:string, password:string): void{
  this.authService.login(username,password)
  .subscribe((reponse:AuthResponse)=>{
    console.log(reponse)
  })
}

public loginForm(): void{
  let userdata = {
    username: 'anonimo',
    password: 'prueba123'
   }

   this.login(userdata.username, userdata.password)
}


}
