import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductService } from './product.service';

@Component({
  selector: 'nat-add-product',
  templateUrl: 'add-product.component.html',
  styleUrls: ['add-product.component.css']
})

export class AddProductComponent implements OnInit {

  addProductForm: FormGroup;
  fb: FormBuilder;
  productService: ProductService;
  starRating = [0,1,2,3,4,5];

  constructor(private _fb: FormBuilder,
              private _productService: ProductService) {
    this.fb = _fb;
    this.productService = _productService;
  }

  ngOnInit() {
    this.addProductForm = this.fb.group({
      name: this.fb.group({
        productName: ['', Validators.minLength(2)],
        productCode: ['', [
          Validators.required,
          this.checkAlreadyExists]]
      }),
      props: this.fb.group({
        releaseDate: '',
        price: ['', this.notFree()],
        description: ''
      }),
      starRating: 0,
      imageUrl: ''
    });
  }

  submitted = false;
  onSubmit(event) {
    this.submitted = true;

    console.log(this.addProductForm.value);
    event.preventDefault();
  }

  checkAlreadyExists() {
    return null;
  }

  notFree() {
    return null;
  }

}
