import {Component, OnInit} from '@angular/core';
import { CategoryService } from 'src/app/core/service/category.service';
import { CategoryModel } from 'src/app/model/Category.model';
import {ActivatedRoute, Router} from "@angular/router";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../../core/service/auth.service";

@Component({
  selector: 'app-category-details',
  templateUrl: './category-details.component.html',
  styleUrls: ['./category-details.component.css']
})
export class CategoryDetailsComponent implements OnInit {
    CategoryModel = new CategoryModel();

    categoryId: any;

  constructor(private CategoryService: CategoryService,
              private authService: AuthService,
              private route: ActivatedRoute,
              private fb: FormBuilder,
              private router: Router) {
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.categoryId = params['id'];

    });
    

    this.route.params.subscribe(
      params => {
        this.CategoryModel.id = params["id"];
        console.log("this.CategoryModel.id", this.CategoryModel.id)
      }
    );

    this.CategoryService.findById(this.CategoryModel.id).subscribe(
      response => {
        if (response) {
          this.CategoryModel = response;
        }
      }, error => {
        alert("error fetching Category details" + error.message);
      }
    );

    // this.initializeForm();

    // end ngOnInit
  }


}