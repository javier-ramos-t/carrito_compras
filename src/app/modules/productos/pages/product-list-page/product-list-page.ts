import { Component, OnInit, inject, signal, viewChild, ElementRef } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ProductTable } from '@modules/productos/components/product-table/product-table'

import   { ProductoService } from '@core/service/producto'
import { ApiResponse, ProductInterface, ProductRequest } from '@modules/productos/models/product.models'
import { ReactiveFormsModule, FormBuilder, Validators  } from '@angular/forms'
import { FormErrorService } from '@shared/services/form-error';

@Component({
  selector: 'app-product-list-page',
  imports: [ReactiveFormsModule, ProductTable],
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

  private fb = inject(FormBuilder);
  private formErrorService = inject(FormErrorService);

  public productForm = this.fb.nonNullable.group({
    name:['', [Validators.required,Validators.minLength(3)]],
    description:['', [Validators.required,Validators.minLength(5)]],
    price:[0, [Validators.required,Validators.minLength(0.01)]],
    stock:[0, [Validators.required,Validators.minLength(0)]],
    category:[0, [Validators.required,Validators.minLength(1)]]
  }
  )

  public readonly products = signal<ProductInterface[]>([])
  private readonly dialogRef = viewChild.required<ElementRef<HTMLDialogElement>>('ProductDialog')
  protected readonly editDato = signal<string|null>(null)
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
  public modalTitle(): string{
    return this.editDato() ? 'Editar Producto': 'Nuevo producto'
  }

  public openCreateModal(): void{
    this.editDato.set(null)
    queueMicrotask(() =>this.dialogRef().nativeElement.showModal());
  }

  public closeModal():void{
    this.dialogRef().nativeElement.close()
  }


  public onDialogBackdrop(event: MouseEvent): void{
    console.log("onDialogOpen")
    if(event.target === event.currentTarget){
      this.closeModal()
    }

    

  }

  public isFieldInvalid(field: string): boolean{
    const control = this.productForm.get(field)
  
    return !!(
      control && control.invalid && 
      (control.touched || control.dirty)
    )
  }

  public getFieldError(field: string): string | null{

    const control = this.productForm.get(field)
  
    return this.formErrorService.getFieldError(control)
  
  }



  public saveProduct(): void{
    console.log(this.productForm)


    if(this.productForm.invalid){
      return;
    }

    const payload = this.productForm.getRawValue()

    this.productService.createProduct(payload as ProductRequest)
    .subscribe((reponse:ApiResponse) =>{

    })
      
  }


  

}
