import { Component, OnInit } from '@angular/core';

import { ApiService } from '../../../services/api/api.service';
import { CartService } from '../../../services/cart/cart.service';
import {Product} from '../../../models/product';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css']
})
export class ProductPageComponent implements OnInit {

  constructor(
    private apiService: ApiService,
    private cartService: CartService
  ) {}

  ngOnInit(): void {
    this.apiService.getProducts();
  }

  public get products(): Product[] {
    return this.apiService.products;
  }
}
