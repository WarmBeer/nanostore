import {Component, Input, OnInit} from '@angular/core';
import {Product} from '../../../../models/product';
import {CartService} from '../../../../services/cart/cart.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  @Input() product: Product;

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
  }

  addToCart(product: Product): void {
    this.cartService.addToCart(product);
  }

}
