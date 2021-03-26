import {Product} from './product';

export class CartItem {
  private product: Product;
  private firstIndexInCart: number;
  private quantity: number;

  constructor(product: Product, index: number) {
    this.product = product;
    this.firstIndexInCart = index;
    this.quantity = 1;
  }

  public getProduct(): Product {
    return this.product;
  }

  public getFirstIndexInCart(): number {
    return this.firstIndexInCart;
  }

  public getQuantity(): number {
    return this.quantity;
  }

  public increaseQuantityByOne(): void {
    ++this.quantity;
  }
}
