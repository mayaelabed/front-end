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
      fullname: ['', Validators.required, Validators.minLength(5)],
      email: ['', Validators.required],
      role: ['USER_ROLE', Validators.required],
      password: ['', Validators.required],
      //image: [null],
      
      
    });
  }

  // onFileChange(event: any) {
  //   const files: FileList | null = (event.target as HTMLInputElement).files;

    
  //   this.userForm.patchValue({
  //     image: files
  //   });
  // }



  createUser() {
    const formData = new FormData();

    // Append each file to the formData
    // if (this.userForm.value.image) {
    //   for (let i = 0; i < this.userForm.value.image.length; i++) {
    //     formData.append('images', this.userForm.value.image[i]);
    //   }
    // }

    // // Append other form values
    // Object.keys(this.userForm.value).forEach(key => {
    //   if (key !== 'image') {
    //     formData.append(key, this.userForm.value[key]);
    //   }
    // });

    console.log("this.registerForm.value : ", this.userForm.value);
    console.log("this.formData after assign : ", formData);

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
