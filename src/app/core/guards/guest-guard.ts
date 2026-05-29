import { CanActivateFn } from '@angular/router';
import { inject } from '@angular/core';
import { AuthService } from '@core/service/auth'
import { Router } from '@angular/router';

export const guestGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService)
  const router = inject(Router)
  const token = authService.getAccessToken()

  console.log(token);
  

  if(token){

    if(authService.isAdmin()){
      return router.createUrlTree(['/productos'])
    } else {
    return router.createUrlTree(['/tienda'])
    }
  }
  
  return true;
};
