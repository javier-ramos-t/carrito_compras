import { Component, OnInit, inject, signal, viewChild, ElementRef } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ToastService } from '@shared/services/toast';
import { ProductCell } from '@shared/components/product-cell/product-cell';
import { DatePipe } from '@angular/common';

import { OrderService } from '@core/service/order';
import { OrderInterface, OrdersApiResponse } from '@modules/pedidos/order.model';
@Component({
  selector: 'app-pedidos',
  imports: [RouterLink, DatePipe, ProductCell],
  templateUrl: './pedidos.html',
  styleUrl: './pedidos.css',
})
export class Pedidos {
  private readonly orderService = inject(OrderService);
  private readonly toastService = inject(ToastService);
  private readonly pageSize = 15;

  protected readonly orders = signal<OrderInterface[]>([]);
  protected readonly totalCount = signal(0);
  protected readonly currentPage = signal(1);
  protected readonly totalPages = signal(1);
  protected readonly hasNext = signal(false);
  protected readonly hasPrevious = signal(false);
  private readonly confirmCancelDialogRef = viewChild.required<ElementRef<HTMLDialogElement>>('confirmCancelDialog');
  protected readonly pendingCancelOrder = signal<OrderInterface | null>(null);


  protected goToPreviousPage(): void {
    if (!this.hasPrevious()) return;
    this.currentPage.update((p) => Math.max(1, p - 1));
    this.loadOrders(this.currentPage());
  }

  protected goToNextPage(): void {
    if (!this.hasNext()) return;
    this.currentPage.update((p) => p + 1);
    this.loadOrders(this.currentPage());
  }

  private loadOrders(page: number): void {
    this.orderService.getOrders(page, this.pageSize).subscribe((response: OrdersApiResponse) => {
      this.orders.set(response.results ?? []);
      this.totalCount.set(response.count ?? 0);
      this.currentPage.set(response.current_page ?? page);
      this.totalPages.set(response.total_pages ?? 1);
      this.hasNext.set(!!response.has_next);
      this.hasPrevious.set(!!response.has_previous);
    });
  }

  protected canCancel(order: OrderInterface): boolean {
    return order.status === 'pending' || order.status === 'processing';
  }

  protected confirmCancel(): void {
    const order = this.pendingCancelOrder();
    if (!order) return;

    this.orderService.cancelOrder(order.id).subscribe(() => {
      this.toastService.show(`Orden #${order.id} cancelada`, 'success');
      this.loadOrders(this.currentPage());
      this.closeConfirmCancelModal();
    });
  }

  public ngOnInit(): void {
    this.loadOrders(1);
  }

  protected openConfirmCancel(order: OrderInterface): void {
    this.pendingCancelOrder.set(order);
    queueMicrotask(() => this.confirmCancelDialogRef().nativeElement.showModal());
  }

  protected closeConfirmCancelModal(): void {
    this.confirmCancelDialogRef().nativeElement.close();
    this.pendingCancelOrder.set(null);
  }

  protected onConfirmCancelBackdrop(event: MouseEvent): void {
    if (event.target === event.currentTarget) {
      this.closeConfirmCancelModal();
    }
  }

}