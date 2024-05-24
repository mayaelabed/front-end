import { Component, OnInit } from '@angular/core';
import { CartService } from '../core/service/cart.service';
import { Product } from '../model/Product';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { AuthService } from '../core/service/auth.service';
import { OrderService } from '../core/service/order.service';
import { ProductService } from '../core/service/product.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cartItems: Product[] = [];
  total: number = 0;
  products:any;


  constructor(
    private authService: AuthService, // Service d'authentification
    private cartService: CartService, // Service du panier
    private orderService: OrderService, // Service de commande
    private router: Router,
    private productService : ProductService
  ) {}

itemProduct : any
  listProduct :any = []
  ngOnInit() {
    console.log(this.cartService.getCartItems());
    
    this.products = this.cartService.getCartItems();
    console.log(this.products);
    this.products.products.map((i:any)=>{
      console.log(i);
      this.productService.findById(i).subscribe(res=>{
        this.itemProduct = res
        this.listProduct.push(this.itemProduct)
      })
      console.log('list ' , this.itemProduct);
      
    })

    
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

 



  passerCommande() {
    if (!this.authService.isLoggedIn()) {
      console.error("Utilisateur non connecté. Veuillez vous connecter pour passer une commande.");
      return;
    }
   
    
    const userId = this.authService.getDetails();
    console.log(userId);
    
    if (!userId) {
      console.error("Impossible de récupérer l'ID de l'utilisateur.");
      this.router.navigate(['/order']);
    }

    this.router.navigate(['/order']);
    
    // this.orderService.passerCommande( userId).subscribe(
    //   response => {
    //     console.log('Commande passée avec succès !', response);
    //     this.router.navigate(['/order', response.orderId]);
    //   },
    //   error => {
    //     console.error('Erreur lors de la commande :', error);
    //   }
    // );
  }
}