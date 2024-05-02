import {Component, OnInit} from '@angular/core';
import { CategoryService } from 'src/app/core/service/category.service';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent implements OnInit {

  CategoryForm!: FormGroup;


  constructor(private CategoryService: CategoryService,
              private fb: FormBuilder,
              private router: Router) {
  }

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.CategoryForm = this.fb.group({
      name: ['', Validators.required, Validators.minLength(5)],
      description: ['', Validators.required],  
    });
  }





  createCategory() {
    const formData = new FormData();


    console.log("this.registerForm.value : ", this.CategoryForm.value);
    console.log("this.formData after assign : ", formData);

    this.CategoryService.createCategory(this.CategoryForm.value).subscribe(
        (response) => {
          console.log("response", response);

          this.CategoryForm.reset();
        },
        (error) => {
          console.log(error.message);
          
          this.router.navigate(['/admin/dashboard/show-category']);
        }
      );
    }

}
