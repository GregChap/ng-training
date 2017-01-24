import { Component, OnInit } from '@angular/core';

import { IProduct } from './product';
import { ProductService } from './product.service';

@Component({
  selector: 'nat-products',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  imageWidth: number = 50;
  imageMargin: number = 2;
  products: IProduct[];
  errorMessage: string;

  constructor(private _productService: ProductService) { }

  ngOnInit() {
    this._productService.getProducts()
      .subscribe(
        products => this.products = products ,
        error => this.errorMessage = <any>error
      );
  }

  pageTitle: string = "Product List";
}
