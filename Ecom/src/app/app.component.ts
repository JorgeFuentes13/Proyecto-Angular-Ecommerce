import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { NavComponent } from './components/nav/nav.component';
import { NavInferiorComponent } from './components/nav-inferior/nav-inferior.component';
import { LoginComponent } from './components/login/login.component';
import { CarritoComponent } from './components/carrito/carrito.component';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule,
            RouterOutlet, 
            NavComponent,
            NavInferiorComponent,
            LoginComponent,
            CarritoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Ecom';
}
