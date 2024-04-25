import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import { UserService } from 'src/app/core/service/user.service';
import {ActivatedRoute, Route, Router} from "@angular/router";
import { UserModel } from 'src/app/model/User.model';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {
  UserModel = new UserModel();

  userForm!: FormGroup;


  constructor(private UserService: UserService,
              private fb: FormBuilder,
              private router: Router,
              private route: ActivatedRoute
  ) {
  }

  ngOnInit(): void {
    this.initForm();
    const userId = this.route.snapshot.params['id'];

    this.userForm.patchValue({_id: userId});

    this.UserService.findById(this.userForm.value._id).subscribe(
      response => {
        if (response) {
          console.log("RoomDetails : ", this.userForm.value, " response : ", response)
          this.userForm.setValue(response);
          console.log("RoomDetails : ", this.userForm.value)
        }
      }, error => {
        alert("error fetching room details" + error.message);
      }
    );
  }

  initForm(): void {
    this.userForm = this.fb.group({
      _id: [null],
      fullname: [null, Validators.required],
      email: [null, Validators.required],
      role: [null, Validators.required],
      
    });
  }

  updateForm(UserModel: UserModel): void {
    this.userForm.patchValue(UserModel);
  }

  updateUser() {
    this.UserService.updateUser(this.userForm.value._id, this.userForm.value).subscribe(
      (response) => {
        console.log("form before send", this.userForm.value);
        console.log("response", response);
        alert("updated successfully")
      },
      (error) => {
        this.router.navigate(['/admin/dashboard/show-user']);
      }
    );
  }

}
