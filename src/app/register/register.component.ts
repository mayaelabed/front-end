import { Component } from '@angular/core';

import {Router} from "@angular/router";
import { AuthService } from 'src/app/core/service/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  form: any = {
    fullname: null,
    email: null,
    password: null
  };
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';

 
  constructor(private authService: AuthService , private router: Router) { }

  onSubmit(): void {
    const { fullname, email, password } = this.form;

    this.authService.register(fullname, email, password).subscribe({
      next: data => {
        console.log(data);
        this.isSuccessful = true;
        this.isSignUpFailed = false;
        this.router.navigate(['/login']);
      },
      error: err => {
        this.router.navigate(['/login']);
      }
    });
  }
}