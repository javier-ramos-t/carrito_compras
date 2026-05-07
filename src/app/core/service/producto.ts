import { Injectable } from '@angular/core';
import { ApiResponse } from '@modules/productos/models/product.models'
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductoService {
  private apiUrl = 'https://softder.com/api/shoppingcart/public-products';

  constructor(private http: HttpClient) {
  }
  public getAllProducts(): Observable<ApiResponse> {
    return this.http.get<ApiResponse>(this.apiUrl)
  }

}