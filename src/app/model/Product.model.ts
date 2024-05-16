

export class ProductModel {
  id?: string;
  name?: string;
  quantity?: Number;
  price?: Number;
  description?: string;
  image?: string[];
  category?: string;
  createdOn?: Date;
  updatedOn?: Date;


  constructor(
    id?: string,
    name?: string,
    quantity?: Number,
    price?: Number,
    description?: string,
    image?: string[],
    category?: string,
    createdOn?: Date,
    updatedOn?: Date
  ) {
    this.id = id;
    this.name = name;
    this.quantity = quantity;
    this.price = price;
    this.description = description;
    this.image = image;
    this.category = category;
    this.createdOn = createdOn;
    this.updatedOn = updatedOn;
  }
}
