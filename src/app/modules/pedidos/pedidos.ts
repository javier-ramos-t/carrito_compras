import { Component, OnInit, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ToastService } from '@shared/services/toast';
import { ProductCell } from '@shared/components/product-cell/product-cell';

import { OrderService } from '@core/service/order';
import { OrderInterface, OrdersApiResponse } from '@modules/pedidos/order.model';
@Component({
  selector: 'app-pedidos',
  imports: [],
  templateUrl: './pedidos.html',
  styleUrl: './pedidos.css',
})
export class Pedidos {}
