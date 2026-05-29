import { HttpInterceptorFn, HttpErrorResponse } from '@angular/common/http';
import { inject } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs'
import { Router } from '@angular/router';
import { NotificationService } from '@shared/services/notification'

export const errorInterceptor: HttpInterceptorFn = (req, next) => {

  const router = inject(Router);
  const notificationService = inject(NotificationService);
  

  return next(req).pipe(
    catchError((error:HttpErrorResponse)=>{
     
      console.log("Estamos en el interceptor")

      console.log(error.status);
      
      if(error.status === 0) {
        console.error('Error de red', error.message)
      } else if (error.status === 401) {
        if (req.url.includes('token')) {
          notificationService.show("El usuario o contraseña no existen")
        } else {
        notificationService.show("Sesion expirada")
        router.navigate(['/login'])
        }
      }else if (error.status === 404) {
        console.error('Recurso no encontrado', error.message)
      } else if (error.status === 503) {
        console.error('Error interno del servidor', error.message)
      } else {
        console.error('Error desconocido', error.message)
      }
      

      return throwError(()=> error)

    })
  );
};
