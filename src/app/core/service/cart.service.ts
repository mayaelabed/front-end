import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from 'src/app/model/Product';

@Injectable({
  providedIn: 'root'
})
export class CartService {

    cartItems: Product[] = [];

  constructor() { }

  addToCart(product: Product): void {
    this.cartItems.push(product);
    console.log(`Le produit "${product.name}" a été ajouté au panier.`);
  }

 

  removeFromCart(productIndex: number) {
    this.cartItems.splice(productIndex, 1);
  }

  clearCart() {
    this.cartItems = [];
  }

  getCartItems() {
    return this.cartItems;
  }

  getCartTotal() {
    // Calculer le total du panier
    let total = 0;
    this.cartItems.forEach(item => {
      total += item.price;
    });
    return total;
  }
}