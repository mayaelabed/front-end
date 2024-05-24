  import { HttpClient } from '@angular/common/http';
  import { Injectable } from '@angular/core';
  import { BehaviorSubject } from 'rxjs';
  import { Product } from 'src/app/model/Product';
  import { AuthService } from './auth.service';
  
  @Injectable({
    providedIn: 'root'
  })
  export class CartService {
  
    private apiUrl = 'http://localhost:3001'; // Mettez l'URL de votre API ici
  
    cartItems: Product[] = [];
  
  
  
  
    private dataSubject = new BehaviorSubject<any>(null);
    data$ = this.dataSubject.asObservable();
  
    setData(data: any) {
      this.dataSubject.next(data);
    }
  
  
  
  
    constructor(private http: HttpClient,private authService : AuthService) { }
  
    addToCart(product: any,userId : any): void {
  
      console.log(product)
       this.http.post(`${this.apiUrl}/cart/add`, { userId: userId,productId:product._id,quantity:1 }).subscribe(
        (v)=>{
          console.log(v);
        }
       );
  
    }
  
  
  
  
  
  
  
    removeFromCart(productIndex: number) {
      this.cartItems.splice(productIndex, 1);
    }
  
    clearCart() {
      this.cartItems = [];
    }
  
    getCartItems() {
      console.log(this.authService.getDetails());
      
       this.http.post(`${this.apiUrl}/cart/all`, { userId:this.authService.getDetails() }).subscribe(
        (v:any)=>{
          console.log(v);
          this.cartItems=v;
        }
       )
      return this.cartItems;
    }
  
    getCartTotal() {
      // Calculer le total du panier
      let total = 0;
     
      return total;
    }
  
  
  
    placeOrder(cartItems: any[]) {
      // Envoyer les données du panier au serveur pour passer la commande
      return this.http.post(`${this.apiUrl}/order`, { items: cartItems });
    }
  }
  
  