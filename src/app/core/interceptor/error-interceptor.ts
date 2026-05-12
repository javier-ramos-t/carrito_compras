import { HttpInterceptorFn, HttpErrorResponse } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs'


export const errorInterceptor: HttpInterceptorFn = (req, next) => {
  return next(req).pipe(
    catchError((error:HttpErrorResponse)=>{
     
      console.log("Estamos en el interceptor")

      console.log(error.status);
      
      if(error.status === 0) {
        console.error('Error de red', error.message)
      } else if (error.status === 401) {
        alert(error.error.detail)
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
