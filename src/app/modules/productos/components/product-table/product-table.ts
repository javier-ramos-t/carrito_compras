import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ProductInterface } from '../../models/product.models'

@Component({
  selector: 'app-product-table',
  imports: [],
  templateUrl: './product-table.html',
  styleUrl: './product-table.css',
})
export class ProductTable {
  constructor(){
    console.log(this.products)
  }
@Input({required: true}) public products: ProductInterface[] = []

@Output() public edit = new EventEmitter<number>();
@Output() public delete = new EventEmitter<number>();

public onEdit(p: number): void{
  this.edit.emit(p)
}

public onDelete(p: number): void{
  this.delete.emit(p)
}
}
