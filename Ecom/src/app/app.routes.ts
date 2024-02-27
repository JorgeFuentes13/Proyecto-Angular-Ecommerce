import { Routes,RouterModule } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { DetailProductComponent } from './detail-product/detail-product.component';

export const routes: Routes = [
    { path: '', redirectTo: '', pathMatch: 'full' },
    { path: 'products', component: ProductsComponent },
    { path: 'detalles-producto', component: DetailProductComponent },
];

