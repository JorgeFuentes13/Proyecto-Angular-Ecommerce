import { Component,OnInit } from '@angular/core';
import { CategoriaService } from '../../service/categoria.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-nav-inferior',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './nav-inferior.component.html',
  styleUrl: './nav-inferior.component.css'
})
export class NavInferiorComponent {
  
  categorias: any=[]

  constructor(private categoriaService: CategoriaService) { }

  ngOnInit(): void {
    this.categoriaService.getCategorias().subscribe(data => {
      this.categorias = data;
    });
}
}
