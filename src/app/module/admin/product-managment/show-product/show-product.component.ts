import {Component, OnInit} from '@angular/core';
import { ProductService } from 'src/app/core/service/product.service';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {Subject} from "rxjs";
import { CategoryService } from 'src/app/core/service/category.service';

@Component({
  selector: 'app-show-product',
  templateUrl: './show-product.component.html',
  styleUrls: ['./show-product.component.css']
})
export class ShowProductComponent implements OnInit {
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject<any>();
  listProductDetails: any = [];
  categories!: any[]; // Declare categories property


  constructor(private ProductService: ProductService,
              private router: Router,
              private CategoryService: CategoryService) {
  }
  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'simple_numbers',
      language: {
        searchPlaceholder: 'Text Customer'
      }
    }
     // Fetch categories when component initializes
     this.CategoryService.getAll().subscribe(
      (categories) => {
        this.categories = categories;
      },
      (error) => {
        console.error('Error fetching categories:', error);
      }
    );

    this.ProductService.getAll().subscribe({
      next: (response) => {
          this.listProductDetails = response;
          console.log("response get all Product : ", response)
          console.log("listProductDetails error get all Product : ", this.listProductDetails)
          this.dtTrigger.next(null);
      }, error: (error) => {
        console.log("error get all Product : ", error)
        this.router.navigate(['/admin/dashboard/show-product']);
      }
    }
    )

  }

  
  
   // Method to get category name based on category ID
   getCategoryName(categoryId: string): string {
    const category = this.categories.find(cat => cat._id === categoryId);
    return category ? category.name : '';
  }



  redirectToDetails(id: string | undefined) {
    console.log(id);
    this.router.navigate(['/user/rent-details', id]);
  };


  deleteProductById(id: string | undefined) {


    this.ProductService.deleteProductById(id).subscribe(
      (response) => {
        console.log(response)
          this.listProductDetails = this.listProductDetails
            .filter((item: { id: string | undefined; }) => item.id !== id);
            this.router.navigate([this.router.url]);

      }, error =>{
        console.log("error to delete product: ", error)
      }
    )


  }


  //
}
