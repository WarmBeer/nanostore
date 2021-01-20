import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css']
})
export class ProductPageComponent implements OnInit {

  public products = [
    {
      name: 'Haan',
      price: 20,
      description: 'Hallo, dit is een test beschrijving.'
    },
    {
      name: 'Kip',
      price: 10,
      description: 'Hallo, dit is een test beschrijving.'
    },
    {
      name: 'Kip',
      price: 10,
      description: 'Hallo, dit is een test beschrijving.'
    },
    {
      name: 'Kip',
      price: 10,
      description: 'Hallo, dit is een test beschrijving.'
    },
    {
      name: 'Kip',
      price: 10,
      description: 'Hallo, dit is een test beschrijving.'
    },
    {
      name: 'Kip',
      price: 10,
      description: 'Hallo, dit is een test beschrijving.'
    },
    {
      name: 'Kip',
      price: 10,
      description: 'Hallo, dit is een test beschrijving.'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
