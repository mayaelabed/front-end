import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../../../core/service/auth.service";
import {Router} from "@angular/router";


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm!: FormGroup;
  user!: any;

  constructor(private authService: AuthService, private fb: FormBuilder, private router: Router) {
  }

  ngOnInit(): void {
    this.registerForm = this.fb.group({
      fullname: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
      role: ['USER_ROLE', Validators.required],
    })
  }


  register() {

 
    this.authService.register(this.registerForm.value).subscribe(
      (response: any) => {
        console.log("response : ", response);
        this.router.navigate(['/user/login']);
      }, error => {
        this.router.navigate(['/user/login']);
      }
    )
  }





}
