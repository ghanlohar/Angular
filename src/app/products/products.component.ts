import { Component, OnInit } from '@angular/core';
import { IProducts } from './products';
import { ProductService } from './product.service';

@Component({
    selector: 'pm-products',
    moduleId: module.id,
    templateUrl: 'products.component.html',
    styleUrls: ['products.component.css']
})
export class ProductsComponent implements OnInit {
    pageTitle: String = 'Product List';
    showImage: Boolean = false;
    listFilter: String = '';
    products: IProducts[] ;
    errorMessage: String = '';

    constructor(private _productService: ProductService) {
        _productService.getProducts()
            .subscribe( products => this.products = products ,
            error => this.errorMessage = <any>error);
    }

    toggleImages(): void {
        this.showImage = !this.showImage;
    }
    ngOnInit(): void {
        console.log('In onInit');
    }
    onRatingClicked(message: String): void {
        this.pageTitle =  'Product List: ' + message;
    }
}
