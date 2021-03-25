import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import {Product} from '../../models/product';
import {throwError} from 'rxjs';
import {catchError} from 'rxjs/operators';
import {User} from '../../models/user';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private JWT_KEY = 'CryptoMarkt.Token';
  private API_SERVER = 'http://localhost:80';
  private PRODUCTS_ENDPOINT = '/products';
  private AUTH_ENDPOINT = '/auth';
  private MY_USER_ENDPOINT = '/myuser';

  // tslint:disable:variable-name
  private _user: User;
  private _jwt = '';
  private _products: Product[] = [];

  constructor(private httpClient: HttpClient) {
    this.initJwt();
  }

  private initJwt(): void {
    this._jwt = localStorage.getItem(this.JWT_KEY);
    if (!this._jwt) {
      this._jwt = '';
    } else {
      this.loginJwt();
    }
  }

  private saveJwt(): void {
    localStorage.setItem(this.JWT_KEY, this._jwt);
  }

  private deleteJwt(): void {
    localStorage.removeItem(this.JWT_KEY);
  }

  public get products(): Product[] {
    return this._products;
  }

  public getProducts(): void {
    this.httpClient.get(this.API_SERVER + this.PRODUCTS_ENDPOINT)
      .subscribe((data: any[]) => {
        this._products = [];
        console.log(data);
        data.forEach((item) => {
          const product = new Product(item.id, item.name, item.price, item.description, item.stock, item.image);
          this._products.push(product);
        });
      });
  }

  public getUser(): User {
    return this._user;
  }

  public login(email, password): Promise<any> {
    return new Promise((resolve, reject) => {
        this.httpClient.post(this.API_SERVER + this.AUTH_ENDPOINT, { email, password })
          .subscribe(
            (data: any) => {
              this._user = new User(data.user.email, data.user.name, data.user.role);
              this._jwt = data.token;
              this.saveJwt();
              resolve('Login success!');
            },
            error => {
              reject(error.error);
            }
          );
    });
  }

  private loginJwt(): void {
    this.httpClient.get(this.API_SERVER + this.MY_USER_ENDPOINT, { headers: new HttpHeaders({Authorization: 'Bearer ' + this._jwt}) })
      .subscribe(
        (data: any) => {
          console.log(data);
          this._user = data.user;
        },
        error => {
          console.error(error);
          this.deleteJwt();
        }
      );
  }

  public logout(): void {
    this._user = undefined;
    this._jwt = '';
    this.deleteJwt();
  }

}
