import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ProductsComponent } from './products.component';
import { ProductDetailComponent } from './product-detail.component';
import { ProductDetailGuard } from './product-guard.service';

@NgModule({
    imports: [
        RouterModule.forChild([
            {path: 'products' , component: ProductsComponent},
            {path: 'products/:id' , component: ProductDetailComponent, canActivate: [ProductDetailGuard]}
        ])
    ],
    exports: [
        RouterModule
    ]
})
export class ProductRouterModule {}
