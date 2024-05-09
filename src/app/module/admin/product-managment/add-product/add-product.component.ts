import {Component, OnInit} from '@angular/core';
import { ProductService } from 'src/app/core/service/product.service';
import { CategoryService } from 'src/app/core/service/category.service';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  ProductForm!: FormGroup;
  categories!: any[]; // Declare categories property

  constructor(private ProductService: ProductService,
              private fb: FormBuilder,
              private router: Router,
              private CategoryService: CategoryService){
  }

  ngOnInit(): void {
    this.initForm();
     // Fetch categories when component initializes
     this.CategoryService.getAll().subscribe(
      (categories) => {
        this.categories = categories;
      },
      (error) => {
        console.error('Error fetching categories:', error);
      }
    );
  }

  initForm() {
    this.ProductForm = this.fb.group({
      name: ['', Validators.required],
      description: ['', Validators.required],  
      quantity: ['', Validators.required],  
      price: ['', Validators.required],  
      category: ['', Validators.required],  
      image: [null]
      
    });
  }

  getUploadedImageUrl(): string | ArrayBuffer {
    const image = this.ProductForm.value.image;
    if (image) {
      return typeof image === 'string' ? image : URL.createObjectURL(image);
    }
    return ''; 
  }



  onFileChange(event: any) {
    if (event.target.files && event.target.files.length) {
      const file = event.target.files[0];
      this.ProductForm.patchValue({
        image: file
      });
      this.ProductForm.get('image')?.updateValueAndValidity();
    }
  }
  createProduct() {

    const formData = new FormData();
    formData.append('name', this.ProductForm.value.name);
    formData.append('description', this.ProductForm.value.description);
    formData.append('quantity', this.ProductForm.value.quantity);
    formData.append('price', this.ProductForm.value.price);
     // Check if category is selected before appending it
  if (this.ProductForm.value.category) {
    formData.append('category', this.ProductForm.value.category);
  }
    formData.append('file', this.ProductForm.value.image);

    console.log("this.registerForm.value : ", this.ProductForm.value);
    
    this.ProductService.createProduct(formData).subscribe(
        (response) => {
          console.log("response", response);

          this.ProductForm.reset();
        },
        (error) => {
          console.log(error.message);
          
          this.router.navigate(['/admin/dashboard/show-product']);
        }
      );
    }

}
