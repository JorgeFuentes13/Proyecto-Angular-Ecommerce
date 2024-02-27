import { Component,Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {

  @Input() cantidadProductos: any;
  // Supongamos que tienes una lista de productos
  productos: any[] = [
    { nombre: 'Producto 1', precio: 10, descripción: 'El mejor producto de..' },
    { nombre: 'Producto 2', precio: 20 ,descripción: 'El mejor producto de..' },
    { nombre: 'Producto 3', precio: 10, descripción: 'El mejor producto de..' },
    { nombre: 'Producto 4', precio: 20 ,descripción: 'El mejor producto de..' },
    { nombre: 'Producto 5', precio: 20 ,descripción: 'El mejor producto de..' },
    // Otros productos...
  ];

  constructor() { }

  

}
