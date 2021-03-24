import { Component, OnInit } from '@angular/core';
import {Product} from '../../models/product';
import {CartService} from '../../services/cart/cart.service';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent implements OnInit {

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
  }

  public get items(): Product[] {
    return this.cartService.getItems();
  }
}
