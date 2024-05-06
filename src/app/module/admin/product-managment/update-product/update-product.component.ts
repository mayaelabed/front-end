import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import { ProductService } from 'src/app/core/service/product.service';
import {ActivatedRoute, Route, Router} from "@angular/router";
import { ProductModel } from 'src/app/model/Product.model';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit {
  ProductModel = new ProductModel();

  ProductForm!: FormGroup;


  constructor(private ProductService: ProductService,
              private fb: FormBuilder,
              private router: Router,
              private route: ActivatedRoute
  ) {
  }

  ngOnInit(): void {
    this.initForm();
    const ProductId = this.route.snapshot.params['id'];

    this.ProductForm.patchValue({_id: ProductId});

    this.ProductService.findById(this.ProductForm.value._id).subscribe(
      response => {
        if (response) {
          console.log("RoomDetails : ", this.ProductForm.value, " response : ", response)
          this.ProductForm.setValue(response);
          console.log("RoomDetails : ", this.ProductForm.value)
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


  updateForm(ProductModel: ProductModel): void {
    this.ProductForm.patchValue(ProductModel);
  }

  updateProduct() {
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
    this.ProductService.updateProduct(this.ProductForm.value._id, this.ProductForm.value).subscribe(
      (response) => {
        console.log("form before send", this.ProductForm.value);
        console.log("response", response);
        alert("updated successfully")
      },
      (error) => {
        this.router.navigate(['/admin/dashboard/show-Product']);
      }
    );
  }

}
