import {Component, OnInit} from '@angular/core';
import {UserService} from "../../../../core/service/user.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {Subject} from "rxjs";

@Component({
  selector: 'app-show-user',
  templateUrl: './show-user.component.html',
  styleUrls: ['./show-user.component.css']
})
export class ShowUserComponent implements OnInit {
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject<any>();

  listUserDetails: any = [];


  constructor(private UserService: UserService,
              private router: Router) {
  }
  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'simple_numbers',
      language: {
        searchPlaceholder: 'Text Customer'
      }
    }

    this.UserService.getAll().subscribe({
      next: (response) => {
          this.listUserDetails = response;
          console.log("response get all user : ", response)
          console.log("listUserDetails error get all user : ", this.listUserDetails)
          this.dtTrigger.next(null);
      }, error: (error) => {
        console.log("error get all user : ", error)
        this.router.navigate(['/admin/dashboard/show-user']);
      }
    }
    )




  }



  redirectToDetails(id: string | undefined) {
    console.log(id);
    this.router.navigate(['/user/rent-details', id]);
  };


  deleteUserById(id: string | undefined) {


    this.UserService.deleteUserById(id).subscribe(
      (response) => {
        console.log(response)
          this.listUserDetails = this.listUserDetails
            .filter((item: { id: string | undefined; }) => item.id !== id);

      }, error =>{
        console.log(error.message);
        

      }
    )


  }


  //
}
