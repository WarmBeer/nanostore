import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Product} from '../../models/product';
import {throwError} from 'rxjs';
import {catchError} from 'rxjs/operators';

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
    this.httpClient.get(this.API_SERVER + this.PRODUCTS_ENDPOINT)
      .pipe(catchError(this.handleError))
      .subscribe((data: any[]) => {
        this._products = [];
        console.log(data);
        data.forEach((item) => {
          const product = new Product(item.id, item.name, item.price, item.description, item.stock, item.image);
          this._products.push(product);
        });
      });
  }

  public login(email, password): Promise<any> {
    return new Promise((resolve, reject) => {
        this.httpClient.post(this.API_SERVER + this.AUTH_ENDPOINT, { email, password })
          .subscribe(
            data => {
              this._user = data;
              resolve('Login success!');
            },
            error => {
              reject(error.error);
            }
          );
    });
  }

  // tslint:disable-next-line:typedef
  private handleError(error: HttpErrorResponse) {
    return throwError(error);
  }
}
