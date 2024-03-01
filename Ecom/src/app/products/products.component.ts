import { Component,Input,OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductService } from '../service/products.service';



@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit {

  productos: any= [];

  @Input() cantidadProductos: number=0;
  // Supongamos que tienes una lista de productos
  
    // Otros productos...

    constructor(private productService: ProductService) { }
    

    ngOnInit(): void {
      this.productService.getProductos().subscribe(data => {
        this.productos = data;
      });
  }
}
