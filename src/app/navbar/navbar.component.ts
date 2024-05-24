import { Component, OnInit } from '@angular/core';
import { AuthService } from '../core/service/auth.service';
import { CartService } from '../core/service/cart.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

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
    private cartService: CartService,
    private http : HttpClient , private router: Router
  ) {
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

  logout(){
    this.http.post('http://localhost:3001/logout' , null , { withCredentials: true }).subscribe(res=>{
      localStorage.clear();
      this.router.navigate(['/' ]);
    })
  }
  data:any
  subscription:any
 
}
