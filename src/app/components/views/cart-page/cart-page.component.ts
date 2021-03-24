import { Component, OnInit } from '@angular/core';
import {CartService} from '../../../services/cart/cart.service';
import {Product} from '../../../models/product';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css']
})
export class CartPageComponent implements OnInit {

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
  }

  public get items(): Product[] {
    return this.cartService.getItems();
  }
}
