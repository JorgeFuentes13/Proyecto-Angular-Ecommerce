import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ProductService } from '../service/products.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-detail-product',
  standalone: true,
  imports: [CommonModule,RouterOutlet],
  templateUrl: './detail-product.component.html',
  styleUrl: './detail-product.component.css'
})
export class DetailProductComponent implements OnInit {

  productoId: any;
  productDetail: any;

  constructor(private DetailsProducto: ProductService,private route: ActivatedRoute,){}

    ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.productoId = params['id'];
      this.getProductDetail(this.productoId);
    });
  }


    getProductDetail(productId: number): void {
      this.DetailsProducto.getDetailsProductos(productId).subscribe(data => {
        this.productDetail = data;
        console.log(this.productDetail)
      });
    }
  }
