import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { ActivatedRoute, Router } from '@angular/router';
import { IProducts } from './products';
import { ProductService } from './product.service';

@Component({
    templateUrl: 'product-detail.component.html'
})
export class ProductDetailComponent implements OnInit, OnDestroy {
    pageTitle: any = 'Product Detail';
    product: IProducts;
    errorMessage: string;
    private sub: Subscription;

    constructor(private _router: Router,
                private _route: ActivatedRoute,
                private _productService: ProductService) {}

    ngOnInit(): void {
        this.sub = this._route.params.subscribe(
            params => {
                const id = +params['id'];
                this.getProduct(id);
            });
    }

    ngOnDestroy(): void {
        this.sub.unsubscribe();
    }

    getProduct(id: number) {
        this._productService.getProduct(id).subscribe(
            product => {this.product = product; console.log(this.product); } ,
            error => this.errorMessage = <any>error);
    }

    onBack(): void {
        this._router.navigate(['/products']);
    }

    onRatingClicked(message: string): void {
        this.pageTitle = 'Product Detail: ' + message;
    }
}
