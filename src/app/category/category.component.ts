import { Component, OnInit } from '@angular/core';
import {CategoryService} from '../core/service/category.service';
import { CategoryModel } from '../model/Category.model';



@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  
  categories!: CategoryModel[];

  constructor( private CategoryService: CategoryService){}
  


  ngOnInit(): void {
   
   this.getCategories();
  }


  getCategories() {
    this.CategoryService.getAll()
      .subscribe(
        (data: any) => {
          this.categories = data;
        },
        (error: any) => {
          console.error(error);
        }
      );
    }

}
