import { Injectable } from '@angular/core';

import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';

import { IProduct } from './product';

@Injectable()
export class ProductService {

  private _urlProduct = 'http://localhost:3000/products'; //'https://randomuser.me/api/?results=3';

  constructor(private _http: Http) { }

  getProducts(): Observable<IProduct[]> {
    return this._http.get(this._urlProduct)
      .map((response: Response) => <IProduct[]>response.json())
      .do(data => console.log('All products: ' + JSON.stringify(data)))
      .catch(this.handleError);
  }

  getProductById(id: number): Observable<IProduct> {
    return this.getProducts()
      .map<IProduct[], IProduct>((products) => {
        return products.find((product) => product.id === id)
      })
  }

  private handleError(error: Response) {
    console.error(error);
    return Observable.throw(error.json().error || 'Server error');
  }
}
