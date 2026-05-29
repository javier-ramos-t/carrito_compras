import { CanActivateFn } from '@angular/router';
import { inject } from '@angular/core';
import { AuthService } from '@core/service/auth'
import { Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService)
  const router = inject(Router)
  const token = authService.getAccessToken()

  if(!token){
    return router.createUrlTree(['/login']);
  }

  const urlDestino = state.url;

  if (urlDestino === '/productos' && !authService.isAdmin()) {
    return router.createUrlTree(['/tienda']);
  }

  return true;

  
};
