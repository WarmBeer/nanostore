import { Component, OnInit } from '@angular/core';
import {CartService} from '../../../services/cart/cart.service';
import {ApiService} from '../../../services/api/api.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-order-details-page',
  templateUrl: './order-details-page.component.html',
  styleUrls: ['./order-details-page.component.css']
})
export class OrderDetailsPageComponent implements OnInit {
  private orderId: string;
  public order = {};

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    public cartService: CartService,
    public apiService: ApiService,
  ) { }

  ngOnInit(): void {
    this.orderId = this.route.snapshot.queryParams.orderId || '';
    if (this.orderId) {
      this.apiService.getOrderById(this.orderId)
        .then(
          data => { this.order = data; },
          error => { this.router.navigate(['../']); }
        );
    } else {
      this.router.navigate(['../']);
    }
  }

}
