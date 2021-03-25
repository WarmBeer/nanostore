import { Component, OnInit } from '@angular/core';
import {Product} from '../../models/product';
import {CartService} from '../../services/cart/cart.service';
import {ApiService} from '../../services/api/api.service';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent implements OnInit {

  constructor(
    public cartService: CartService,
    public apiService: ApiService
  ) { }

  ngOnInit(): void {
  }
}
