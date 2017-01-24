import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { IProduct } from './product';
import { ProductService } from './product.service'

import 'rxjs/add/operator/map';

@Component({
  selector: 'app-product-detail',
  templateUrl: 'product-detail.component.html',
  styleUrls: ['product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  pageTitle: string = "Detail Page";
  product: IProduct;
  errorMessage: string;

  constructor(private _route: ActivatedRoute,
              private _router: Router,
              private _productService: ProductService) { }

  ngOnInit() {
    let id = +this._route.snapshot.params['id'];
    this.pageTitle += `: ${id}`;

    this._productService.getProductById(id)
      .subscribe(
        product => this.product = product,
        error => this.errorMessage = <any>error
      );
  }

  onBack() {
    this._router.navigate(['/products']);
  }
}
