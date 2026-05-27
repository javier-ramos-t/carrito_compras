import { inject, Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { OrderInterface, OrdersApiResponse } from '@modules/pedidos/order.model';

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  private readonly url = 'api/shoppingcart/orders/';
  private readonly http = inject(HttpClient);


}
