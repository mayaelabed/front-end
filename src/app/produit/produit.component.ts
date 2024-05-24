import { Component , Input, OnInit} from '@angular/core';
import { CartService } from '../core/service/cart.service';
import { ProductService } from '../core/service/product.service';
import { Product } from '../model/Product';
import { Title } from '@angular/platform-browser';

import { CategoryService } from '../core/service/category.service';
import { AuthService } from '../core/service/auth.service';


@Component({
  selector: 'app-produit',
  templateUrl: './produit.component.html',
  styleUrls: ['./produit.component.css']
})
export class ProduitComponent  implements OnInit{
  products: any[] = [];

  @Input() product!: Product;

  constructor(private cartService: CartService,private productService: ProductService,    private authService: AuthService, // Service d'authentification
) { }

  addToCart(product: any): void {
    const userId = this.authService.getDetails();
    this.cartService.addToCart(product,userId); // Utilisez le service de panier pour ajouter le produit au panier
  }
 

  
  ngOnInit(): void {
    this.loadProducts();
 
  }


  

  loadProducts() {
    this.productService.getAll().subscribe(
    
      (data: any) => {
        console.log(data);
        
        this.products = data;
      },
      (error: any) => {
        console.error(error);
      }
    );
  }
}