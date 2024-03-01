import { Routes,RouterModule } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { DetailProductComponent } from './detail-product/detail-product.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    { path: '',  component: HomeComponent },
    { path: 'detalles-producto/:id', component: DetailProductComponent },
];

