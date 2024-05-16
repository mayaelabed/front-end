import { Component , Input, OnInit} from '@angular/core';
import { CartService } from '../core/service/cart.service';
import { ProductService } from '../core/service/product.service';
import { Product } from '../model/Product';
import { Title } from '@angular/platform-browser';

import { CategoryService } from '../core/service/category.service';


@Component({
  selector: 'app-produit',
  templateUrl: './produit.component.html',
  styleUrls: ['./produit.component.css']
})
export class ProduitComponent  implements OnInit{
  products: any[] = [];
  categories: any[] = [];
  categoryId:any;
  @Input() product!: Product;

  constructor(private cartService: CartService,private productService: ProductService , private categoryService: CategoryService ) { }

  addToCart(product: Product): void {
    this.cartService.addToCart(product); // Utilisez le service de panier pour ajouter le produit au panier
  }
 
  getCategoryNameById(): string {
    
    const category = this.categories.find(cat => cat._id === this.categoryId);
    return category ? category.name : '';
  }

  
  ngOnInit(): void {
    this.categoryService.getAll().subscribe(
      (categories) => {
        this.categories = categories;
      },
      (error) => {
        console.error('Error fetching categories:', error);
      }
    );
    console.log(this.getCategoryNameById());
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