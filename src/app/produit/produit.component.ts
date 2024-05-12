import { Component , Input, OnInit} from '@angular/core';
import { CartService } from '../core/service/cart.service';
import { ProductService } from '../core/service/product.service';
import { Product } from '../model/Product';
import { Title } from '@angular/platform-browser';



@Component({
  selector: 'app-produit',
  templateUrl: './produit.component.html',
  styleUrls: ['./produit.component.css']
})
export class ProduitComponent  implements OnInit{
  products: any[] = [
    
  ];

  @Input() product!: Product;

  constructor(private cartService: CartService,private productService: ProductService) { }

  addToCart(product: Product): void {
    this.cartService.addToCart(product); // Utilisez le service de panier pour ajouter le produit au panier
  }
 



  
  ngOnInit(): void {
    this.loadProducts();
  }


  loadProducts() {
    this.productService.getAll().subscribe(
      (data: any) => {
        this.products = data;
      },
      (error: any) => {
        console.error(error);
      }
    );
  }
}