import { Injectable } from '@angular/core';
import {Product} from '../../models/product';

@Injectable({
  providedIn: 'root'
})

export class CartService {
  products: Product[];

  constructor() {
    this.resetCart();
  }

  getProducts(): Product[] {
    return this.products;
  }

  addToCart(product: Product): void {
    this.products.push(product);
  }

  removeFromCart(index: number): void {
    if (index > -1) {
      this.products.splice(index, 1);
    }
  }

  resetCart(): void {
    this.products = [];
  }
}
