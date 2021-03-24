export class Product {
  id: number;
  name: string;
  price: number;
  description: string;
  stock: number;
  image: string;

  constructor(id, name, price, description, stock, image) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.description = description;
    this.stock = stock;
    this.image = image;
  }
}
