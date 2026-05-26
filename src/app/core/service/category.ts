import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiResponse } from '@modules/productos/models/product.models'
import { environment } from '@environments/environment'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  private http = inject(HttpClient)
  private apiCategories = `${environment.apiUrl}/api/shoppingcart/categories`;
 
  public getAllCategories(): Observable<ApiResponse>{
    return this.http.get<ApiResponse>(this.apiCategories)
  }
 
}
