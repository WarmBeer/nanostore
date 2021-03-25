import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Product} from '../../models/product';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private API_SERVER = 'http://localhost:80';
  private PRODUCTS_ENDPOINT = '/products';
  private AUTH_ENDPOINT = '/auth';

  // tslint:disable-next-line:variable-name
  private _user: {};
  // tslint:disable-next-line:variable-name
  private _products: Product[];

  constructor(private httpClient: HttpClient) {
    this._user = {};
    this._products = [];
  }

  public get products(): Product[] {
    return this._products;
  }

  public getProducts(): void {
    this.httpClient.get(this.API_SERVER + this.PRODUCTS_ENDPOINT).subscribe((data: any[]) => {
      this._products = [];
      console.log(data);
      data.forEach((item) => {
        const product = new Product(item.id, item.name, item.price, item.description, item.stock, item.image);
        this._products.push(product);
      });
    });
  }

  public login(email, password): void {
    this.httpClient.get(this.API_SERVER + this.PRODUCTS_ENDPOINT).subscribe((data: any) => {
      if(data.error) {

      } else {
        this._user = data;
      }
    });
  }
}
