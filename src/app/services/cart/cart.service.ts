import { Injectable } from '@angular/core';
import {Product} from '../../models/product';
import {CartItem} from '../../models/cartItem';
import {ApiService} from '../api/api.service';
import {ActivatedRoute, Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private CART_KEY = 'CryptoMarkt.Cart';

  public purchasing = false;
  public error: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private apiService: ApiService
  ) { this.initCart(); }

  // tslint:disable-next-line:variable-name
  private _items: Product[];

  public initCart(): void {
    this._items = JSON.parse(localStorage.getItem(this.CART_KEY));
    if (!this._items) { this._items = []; }
  }

  public clearCart(): void {
    this._items = [];
    this.updateCart();
  }

  public get items(): Product[] {
    return this._items;
  }

  public get uniqueItems(): CartItem[] {
    const itemIds: string[] = [];
    const uniqueItems: CartItem[] = [];

    this._items.forEach((item, index) => {
      if (itemIds.indexOf(item.id) < 0) {
        const cartItem = new CartItem(item, index);
        itemIds.push(item.id);
        uniqueItems.push(cartItem);
      } else {
        uniqueItems.forEach((cartItem) => {
          if (cartItem.getProduct().id === item.id) {
            cartItem.increaseQuantityByOne();
          }
        });
      }
    });

    return uniqueItems;
  }

  public get subtotal(): number {
    let subTotal = 0.00;

    this.uniqueItems.forEach((cartItem) => {
      subTotal += (cartItem.getProduct().price * cartItem.getQuantity());
    });

    return subTotal;
  }

  public addToCart(product: Product): void {
    this._items.push(product);
    this.updateCart();
  }

  public removeFromCart(index: number): void {
    this._items.splice(index, 1);
    this.updateCart();
  }

  private updateCart(): void {
    localStorage.setItem(this.CART_KEY, JSON.stringify(this._items));
  }

  public checkout(): void {
    if (this.apiService.getUser()) {
      this.purchasing = true;
      this.error = '';
      this.apiService.purchase(this.uniqueItems)
        .then(
          data => {
            console.log(data);
            this.purchasing = false;
            this.clearCart();
            this.router.navigate(['/order', data]);
          },
          error => {
            console.error(error);
            this.purchasing = false;
            this.error = error.error;
          }
        );
    } else {
      this.router.navigate(['/login'], {queryParams: {returnUrl: '/cart'}});
    }
  }
}
