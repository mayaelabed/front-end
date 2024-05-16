import { Component, OnInit } from '@angular/core';
import { CartService } from '../core/service/cart.service';
import { Product } from '../model/Product';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cartItems: Product[] = [];
  total: number = 0;
  

  data :any
  userId:any
  p:any
  idProduit:any
  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.getCartItems();
  }

  getCartItems(): void {
    this.cartItems = this.cartService.getCartItems();
    this.calculateTotal();
  }



  clearCart(): void {
    this.cartService.clearCart();
    this.cartItems = [];
    this.total = 0;
  }

  private calculateTotal(): void {
    this.total = this.cartItems.reduce((acc, item) => acc + item.price, 0);
  }

  getTotal(): number {
    return this.cartItems.reduce((total, product) => total + product.price, 0);
  }

  removeFromCart(index: number): void {
    this.cartService.removeFromCart(index);
    this.cartItems = this.cartService.getCartItems(); // Mettre à jour la liste des produits affichés dans le panier
  }

  submit(){
      console.log(this.cartItems);
      
  }



}
