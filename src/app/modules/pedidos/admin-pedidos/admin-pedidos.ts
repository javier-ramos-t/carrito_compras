import { Component, inject, signal } from '@angular/core';
import { ToastService } from '@shared/services/toast';
import { OrderService } from '@core/service/order';

@Component({
  selector: 'app-admin-pedidos',
  imports: [],
  templateUrl: './admin-pedidos.html',
  styleUrl: './admin-pedidos.css',
})
export class AdminPedidos {
  private toastService = inject(ToastService);


  protected readonly allOrders = signal<any[]>([
    { id:  101, customer: 'Juan', total: 49.99, status: 'Pendiente', date: '2024-06-01' },
    { id:  102, customer: 'María', total: 89.50, status: 'En proceso', date: '2024-06-02' },
    { id:  103, customer: 'Carlos', total: 29.99, status: 'Completado', date: '2024-06-03' },
  ]);

  protected updateOrderStatus(orderId: number, event: Event): void {
    const newStatus = (event.target as HTMLSelectElement).value;

    //this.orderService.updateOrderStatus(orderId, newStatus).subscribe(() => {
      
      this.toastService.show('Estado de la orden ' + orderId + ' actualizado a ' + newStatus, 'success');

  }
}