import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {Subject} from "rxjs";
import { OrderService } from 'src/app/core/service/order.service';

@Component({
  selector: 'app-show-order',
  templateUrl: './show-order.component.html',
  styleUrls: ['./show-order.component.css']
})
export class ShowOrderComponent implements OnInit {
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject<any>();
  listOrderDetails: any = [];


  constructor(private OrderService: OrderService,
              private router: Router) {
  }
  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'simple_numbers',
      language: {
        searchPlaceholder: 'Text Customer'
      }
    }
    
    this.OrderService.getAll().subscribe({
      next: (response) => {
          this.listOrderDetails = response;
          console.log("response get all Order : ", response)
          console.log("listOrderDetails error get all Order : ", this.listOrderDetails)
          this.dtTrigger.next(null);
      }, error: (error) => {
        console.log("error get all Order : ", error)
        this.router.navigate(['/admin/dashboard/show-order']);
      }
    }
    )

  }

  
  


  redirectToDetails(id: string | undefined) {
    console.log(id);
    this.router.navigate(['/user/rent-details', id]);
  };
}
