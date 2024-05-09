import {Component, OnInit} from '@angular/core';
import { CategoryService } from 'src/app/core/service/category.service';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {Subject} from "rxjs";

@Component({
  selector: 'app-show-category',
  templateUrl: './show-category.component.html',
  styleUrls: ['./show-category.component.css']
})
export class ShowCategoryComponent implements OnInit {
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject<any>();

  listCategoryDetails: any = [];


  constructor(private CategoryService: CategoryService,
              private router: Router) {
  }
  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'simple_numbers',
      language: {
        searchPlaceholder: 'Text Customer'
      }
    }

    this.CategoryService.getAll().subscribe({
      next: (response) => {
          this.listCategoryDetails = response;
          console.log("response get all Category : ", response)
          console.log("listCategoryDetails error get all Category : ", this.listCategoryDetails)
          this.dtTrigger.next(null);
      }, error: (error) => {
        console.log("error get all Category : ", error)
        this.router.navigate(['/admin/dashboard/show-category']);
      }
    }
    )




  }



  redirectToDetails(id: string | undefined) {
    console.log(id);
    this.router.navigate(['/user/rent-details', id]);
  };


  deleteCategoryById(id: string | undefined) {


    this.CategoryService.deleteCategoryById(id).subscribe(
      (response) => {
        console.log(response)
          this.listCategoryDetails = this.listCategoryDetails
            .filter((item: { id: string | undefined; }) => item.id !== id);

      }, error =>{
        console.log(error.message);
        
      }
    )


  }


  //
}
