import { Component, OnInit, signal } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ProductTable } from '@modules/productos/components/product-table/product-table'

import   { ProductoService } from '@core/service/producto'
import { ApiResponse, ProductInterface } from '@modules/productos/models/product.models'

@Component({
  selector: 'app-product-list-page',
  imports: [ProductTable],
  templateUrl: './product-list-page.html',
  styleUrl: './product-list-page.css',
})
export class ProductListPage implements OnInit {
  constructor(
    private router: Router, 
    private routerActivate: ActivatedRoute,
    private productService: ProductoService
  ){

    console.log("ProductListPage");
    console.log(this.routerActivate.snapshot.params['id2'])

  }

  public readonly products = signal<ProductInterface[]>([])

  goLogin():void {
    this.router.navigate(['/login'])
  }

  public onEdit(id: number):void{
    console.log("Edicion del producto",id)
  }

  public onDelete(id: number):void{
    console.log("Eliminar producto",id)
  }


  public ngOnInit():void{
    this.productService.getAllProducts()
    .subscribe((data:ApiResponse)=>{
      console.log(data.results)
      this.products.set(data.results?? [])
    });
  }
}
