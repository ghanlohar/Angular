import { Http, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import { IProducts } from './products';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';

@Injectable()
export class ProductService {
    private _productUrl = '../api/products/products.json';
    constructor(private _http: Http) {}

    getProducts(): Observable<IProducts[]> {
        return this._http.get(this._productUrl)
        .map((response: Response) => <IProducts[]> response.json())
        .do(data => console.log('All: ' +  JSON.stringify(data)))
        .catch(this.handleError);
    }

    getProduct(id: number): Observable<IProducts> {
        return this.getProducts()
        .map((products: IProducts[]) => products.find(product => product.productId === id));
    }

    private handleError(error: Response) {
        console.log(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}
