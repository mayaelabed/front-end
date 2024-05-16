import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import { ProductService } from 'src/app/core/service/product.service';
import {ActivatedRoute, Route, Router} from "@angular/router";
import { ProductModel } from 'src/app/model/Product.model';
import { CategoryService } from 'src/app/core/service/category.service';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit {
  ProductModel = new ProductModel();
  ProductForm!: FormGroup;
  categories: any[] = [];
  categoryId: any;


  constructor(private ProductService: ProductService,
              private fb: FormBuilder,
              private router: Router,
              private route: ActivatedRoute,
              private CategoryService: CategoryService
  ) {
  }

  ngOnInit(): void {
    this.initForm();

    this.CategoryService.getAll().subscribe(
      (categories) => {
        this.categories = categories;
      },
      (error) => {
        console.error('Error fetching categories:', error);
      }
    );
   

    const ProductId = this.route.snapshot.params['id'];

    this.ProductForm.patchValue({_id: ProductId});

    this.ProductService.findById(this.ProductForm.value._id).subscribe(
      response => {
        if (response) {
          this.categoryId = response.category;
          
          console.log("Product details : ", this.ProductForm.value, " response : ", response)
          this.ProductForm.setValue(response);
          //console.log("Product details : ", this.ProductForm.value)
        }
      }, error => {
        alert("error fetching room details" + error.message);
      }
    );
  }

  initForm(): void {
    this.ProductForm = this.fb.group({
      _id: [null],
      name: ['', Validators.required],
      description: ['', Validators.required],  
      quantity: ['', Validators.required],  
      price: ['', Validators.required],  
      //image: [null],
      category: ['', Validators.required],  
    });
  }




  // onFileChange(event: any) {
  //   if (event.target.files && event.target.files.length) {
  //     const file = event.target.files[0];
  //     this.ProductForm.patchValue({
  //       image: file
  //     });
  //     this.ProductForm.get('image')?.updateValueAndValidity();
  //   }
  // }

  getCategoryNameById(): string {
    
    const category = this.categories.find(cat => cat._id === this.categoryId);
    return category ? category.name : '';
  }


  updateForm(ProductModel: ProductModel): void {
    this.ProductForm.patchValue(ProductModel);
  }

  updateProduct() {
    const formData = new FormData();
    formData.append('name', this.ProductForm.value.name);
    formData.append('description', this.ProductForm.value.description);
    formData.append('quantity', this.ProductForm.value.quantity);
    formData.append('price', this.ProductForm.value.price);

     // Check if category is selected before appending it
  if (this.ProductForm.value.category) {
    formData.append('category', this.ProductForm.value.category);
  }
    //formData.append('file', this.ProductForm.value.image);

    console.log("this.registerForm.value : ", this.ProductForm.value);

    this.ProductService.updateProduct(this.ProductForm.value._id, formData).subscribe(
      (response) => {
        console.log("form before send", this.ProductForm.value);
        console.log("response", response);
        alert("updated successfully")
      },
      (error) => {
        this.router.navigate(['/admin/dashboard/show-product']);
      }
    );
  }

}
