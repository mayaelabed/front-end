import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {AuthService} from "../../../../core/service/auth.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public loginForm!: FormGroup;

  // public user!: UserDetails;
  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
    )
    {
  }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    })
  }


  login() {
    console.log('this.loginForm.value ===== ', this.loginForm.value)
    this.authService.authenticate(this.loginForm.value).subscribe(
      async (response: any) => {
        if (response) {

          console.log("logged success response : ", response);
          this.authService.saveUserDetails(response);
          await this.router.navigate(['/admin/dashboard']);
        } else {
          console.log("mochkel response : ", response);
        }
      }, error => {
        // Handle login error (e.g., display error message)
        console.error('mochkel login', error);
      }
    )
  }
}
