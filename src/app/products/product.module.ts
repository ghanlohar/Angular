import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { ProductRouterModule } from './product-router.module';

import { ProductsComponent } from './products.component';
import { ProductFilterPipe } from './product-filter.pipe';
import { ProductService } from './product.service';
import { ProductDetailComponent } from './product-detail.component';
import { ProductDetailGuard } from './product-guard.service';
import { ConvertToSpacesPipe } from './convert-spaces.pipe';

@NgModule({
    imports: [
        SharedModule,
        ProductRouterModule
    ],
    declarations: [
        ProductsComponent,
        ProductDetailComponent,
        ProductFilterPipe,
        ConvertToSpacesPipe
    ],
    providers: [
        ProductService,
        ProductDetailGuard
    ]
})
export class ProductModule {

}
