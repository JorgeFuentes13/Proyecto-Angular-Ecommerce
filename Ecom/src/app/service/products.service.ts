import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Producto } from '../interfaces/products';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private apiUrl = 'http://127.0.0.1:8000/api/products/list-product/';

  private apiUrlDetail = 'http://127.0.0.1:8000/api/products/producto-detail/'


  constructor(private http: HttpClient) { }

  getProductos(): Observable<Producto[]> {
    return this.http.get<any[]>(this.apiUrl);
  }


  getDetailsProductos(ProductoId:number):Observable<Producto> {
    const url = `${this.apiUrlDetail}${ProductoId}/`;
    return this.http.get<any>(url);

  }
}