import {Component, OnInit} from '@angular/core';
import {UserService} from "../../../../core/service/user.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  userForm!: FormGroup;


  constructor(private UserService: UserService,
              private fb: FormBuilder,
              private router: Router) {
  }

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.userForm = this.fb.group({
      fullname: ['', Validators.required, Validators.minLength(6)],
      email: ['', Validators.required],
      role: ['', Validators.required],
      
      
    });
  }




  createUser() {

    this.UserService.createUser(this.userForm.value).subscribe(
        (response) => {
          console.log("response", response);

          this.userForm.reset();
        },
        (error) => {
          console.log(error.message);
          
          this.router.navigate(['/admin/dashboard/show-user']);
        }
      );
    }

}
