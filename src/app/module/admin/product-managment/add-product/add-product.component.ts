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
      image: [null],
      category: ['', Validators.required],  
    });
  }



  onFileChange(event: any) {
    const files: FileList | null = (event.target as HTMLInputElement).files;
    this.ProductForm.patchValue({
      image: files
    });
  }



  createProduct() {
    const formData = new FormData();

    // Append each file to the formData
    if (this.ProductForm.value.image) {
      for (let i = 0; i < this.ProductForm.value.image.length; i++) {
        formData.append('images', this.ProductForm.value.image[i]);
      }
    }

    // Append other form values
    Object.keys(this.ProductForm.value).forEach(key => {
      if (key !== 'image') {
        formData.append(key, this.ProductForm.value[key]);
      }
    });
    
    console.log("this.registerForm.value : ", this.ProductForm.value);
    console.log("this.formData after assign : ", formData);

    this.ProductService.createProduct(this.ProductForm.value).subscribe(
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
