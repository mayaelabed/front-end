import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../../core/service/auth.service";

@Component({
  selector: 'user-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  userDetails!: any;


  constructor(private authService: AuthService) {
  }

  ngOnInit(): void {
    this.userDetails = this.authService.getUserDetails("all");
    this.isLoggedIn();
    console.log("this.isLoggedIn() ===",this.isLoggedIn());
  }

  isLoggedIn(): boolean {
    return this.authService.isLoggedIn();
  }

  logout() {
    this.authService.logout();
  }

}
