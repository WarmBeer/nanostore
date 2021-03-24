import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private API_SERVER = 'http://localhost:80';
  private PRODUCTS_ENDPOINT = '/products';

  constructor(private httpClient: HttpClient) { }

  public getProducts() {
    return this.httpClient.get(this.API_SERVER + this.PRODUCTS_ENDPOINT);
  }
}
