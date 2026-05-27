import { inject, Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { OrderInterface, OrdersApiResponse } from '@modules/pedidos/order.model';
import { environment } from '@environments/environment';

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  private readonly url = `${environment.apiUrl}/api/shoppingcart/orders/`;
  private readonly http = inject(HttpClient);

  public getOrders(page = 1, pageSize = 15): Observable<OrdersApiResponse> {
    const params = new HttpParams()
      .set('page', String(page))
      .set('page_size', String(pageSize));

    return this.http.get<OrdersApiResponse>(this.url, { params });
  }

  public cancelOrder(id: number): Observable<OrderInterface> {
    return this.http.post<OrderInterface>(`${this.url}${id}/cancel/`, {});
  }


}
