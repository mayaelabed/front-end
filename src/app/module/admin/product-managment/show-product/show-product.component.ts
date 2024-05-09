import {Component, OnInit} from '@angular/core';
import { ProductService } from 'src/app/core/service/product.service';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {Subject} from "rxjs";

@Component({
  selector: 'app-show-product',
  templateUrl: './show-product.component.html',
  styleUrls: ['./show-product.component.css']
})
export class ShowProductComponent implements OnInit {
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject<any>();

  listProductDetails: any = [];


  constructor(private ProductService: ProductService,
              private router: Router) {
  }
  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'simple_numbers',
      language: {
        searchPlaceholder: 'Text Customer'
      }
    }

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

      }, error =>{
        alert("Problem Occurred: "+ error.error.message);

      }
    )


  }


  //
}
