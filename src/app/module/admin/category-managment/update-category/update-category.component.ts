import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import { CategoryService } from 'src/app/core/service/category.service';
import {ActivatedRoute, Route, Router} from "@angular/router";
import { CategoryModel } from 'src/app/model/Category.model';

@Component({
  selector: 'app-update-category',
  templateUrl: './update-category.component.html',
  styleUrls: ['./update-category.component.css']
})
export class UpdateCategoryComponent implements OnInit {
  CategoryModel = new CategoryModel();

  CategoryForm!: FormGroup;


  constructor(private CategoryService: CategoryService,
              private fb: FormBuilder,
              private router: Router,
              private route: ActivatedRoute
  ) {
  }

  ngOnInit(): void {
    this.initForm();
    const categoryId = this.route.snapshot.params['id'];

    this.CategoryForm.patchValue({_id: categoryId});

    this.CategoryService.findById(this.CategoryForm.value._id).subscribe(
      response => {
        if (response) {
          console.log("RoomDetails : ", this.CategoryForm.value, " response : ", response)
          this.CategoryForm.setValue(response);
          console.log("RoomDetails : ", this.CategoryForm.value)
        }
      }, error => {
        alert("error fetching room details" + error.message);
      }
    );
  }

  initForm(): void {
    this.CategoryForm = this.fb.group({
      _id: [null],
      name: [null, Validators.required],
      description: [null, Validators.required],
      
    });
  }

  updateForm(CategoryModel: CategoryModel): void {
    this.CategoryForm.patchValue(CategoryModel);
  }

  updateCategory() {
    this.CategoryService.updateCategory(this.CategoryForm.value._id, this.CategoryForm.value).subscribe(
      (response) => {
        console.log("form before send", this.CategoryForm.value);
        console.log("response", response);
        alert("updated successfully")
      },
      (error) => {
        this.router.navigate(['/admin/dashboard/show-category']);
      }
    );
  }

}
