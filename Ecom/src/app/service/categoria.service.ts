import { Injectable } from '@angular/core';
import { Categoria } from '../interfaces/products';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {
  private apiUrl = 'http://127.0.0.1:8000/api/products/categoria/';

  constructor(private http: HttpClient) { }

  getCategorias(): Observable<Categoria[]> {
    return this.http.get<any[]>(this.apiUrl);
  }
}
