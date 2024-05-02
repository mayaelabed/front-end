import {Component, OnInit} from '@angular/core';
import { UserService } from 'src/app/core/service/user.service';
import { UserModel } from 'src/app/model/User.model';
import {ActivatedRoute, Router} from "@angular/router";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../../core/service/auth.service";

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
    UserModel = new UserModel();

    userId: any;

  constructor(private UserService: UserService,
              private authService: AuthService,
              private route: ActivatedRoute,
              private fb: FormBuilder,
              private router: Router) {
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.userId = params['id'];

    });
    

    this.route.params.subscribe(
      params => {
        this.UserModel.id = params["id"];
        console.log("this.UserModel.id", this.UserModel.id)
      }
    );

    this.UserService.findById(this.UserModel.id).subscribe(
      response => {
        if (response) {
          this.UserModel = response;
        }
      }, error => {
        alert("error fetching User details" + error.message);
      }
    );

    // this.initializeForm();

    // end ngOnInit
  }


}