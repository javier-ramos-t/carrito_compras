import { Component, OnInit, inject, signal, computed } from '@angular/core';
import { Router } from '@angular/router';
import { ProductoService } from '@core/service/producto';
import { ApiResponse, ProductInterface } from '@modules/productos/models/product.models';

@Component({
  selector: 'app-inicio',
  imports: [],
  templateUrl: './inicio.html',
  styleUrl: './inicio.css',
})

export class Inicio implements OnInit {
  private productoService = inject(ProductoService);
  private router = inject(Router);

  protected readonly products = signal<ProductInterface[]>([]);
  protected readonly indiceActual = signal<number>(0);

  protected readonly productoVisible = computed(() => {
    const productos = this.products();
    if (productos.length === 0) return null;
    return productos[this.indiceActual()];
  });

  public ngOnInit(): void {
    this.loadDestacados();
  }

  private loadDestacados(): void {
    this.productoService.getPublicProducts(1, 5).subscribe((response: ApiResponse) => {
      this.products.set(response.results ?? []);
    });
  }

  protected siguiente(): void {
    const total = this.products().length;
    if (total === 0) return;
    this.indiceActual.update(i => i < total - 1 ? i + 1 : 0);
  }

  protected anterior(): void {
    const total = this.products().length;
    if (total === 0) return;
    this.indiceActual.update(i => i > 0 ? i - 1 : total - 1);
  }

  protected irATienda(): void {
    this.router.navigate(['/tienda']);
  }
}