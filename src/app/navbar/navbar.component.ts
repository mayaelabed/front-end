import { Component, OnInit } from '@angular/core';
import { AuthService } from '../core/service/auth.service';
import { CartService } from '../core/service/cart.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  userDetails!: any;

  cartItems:any
  constructor(
    private authService: AuthService,
    private cartService: CartService) {
  }

  ngOnInit(): void {
    this.subscription = this.cartService.data$.subscribe(data => {
      this.data = data;
    });
    this.userDetails = this.authService.getUserDetails("all");
    this.getPanier()
    this.isLoggedIn();
    console.log("this.isLoggedIn() ===",this.isLoggedIn());
  }

  getPanier(){
    this.cartItems = this.cartService.getCartItems();
    console.log(this.cartItems);
    
  }

  isLoggedIn(): boolean {
    return this.authService.isLoggedIn();
  }

  logout() {
    this.authService.logout();
  }
  data:any
  subscription:any
 
}
