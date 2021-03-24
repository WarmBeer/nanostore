import { Injectable } from '@angular/core';
import {Product} from '../../models/product';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private CART_KEY = 'CryptoMarkt.Cart';

  constructor() { this.initCart(); }

  // tslint:disable-next-line:variable-name
  private _items: Product[];

  public initCart(): void {
    this._items = JSON.parse(localStorage.getItem(this.CART_KEY));
    if (!this._items) { this._items = []; }
  }

  public getItems(): Product[] {
    return this._items;
  }

  public addToCart(product: Product): void {
    this._items.push(product);
    this.updateCart();
  }

  public removeFromCart(index: number): void {
    if (index > -1) {
      this._items.splice(index, 1);
    }
    this.updateCart();
  }

  private updateCart(): void {
    localStorage.setItem(this.CART_KEY, JSON.stringify(this._items));
  }
}
