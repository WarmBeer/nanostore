import { Component, OnInit } from '@angular/core';

import { CartService } from '../../../services/cart/cart.service';
import { ApiService } from '../../../api/api.service';
import {Product} from '../../../models/product';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css']
})
export class ProductPageComponent implements OnInit {

  public products: Product[];

  constructor(
    private cartService: CartService,
    private apiService: ApiService
  ) { }

  ngOnInit(): void {
    this.apiService.getProducts().subscribe((data: any[]) => {
      this.products = [];
      console.log(data);
      data.forEach((item) => {
        const product = new Product(item.id, item.name, item.price, item.description, item.stock, item.image);
        this.products.push(product);
      });
    });
  }

  addToCart(product): void {
    this.cartService.addToCart(product);
    window.alert('Your product has been added to the cart!');
  }

}
