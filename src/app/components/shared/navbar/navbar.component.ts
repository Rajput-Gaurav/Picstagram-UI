import { Component, OnInit } from "@angular/core";
// import Router():
import { Router } from "@angular/router";
// import AuthService:
import { AuthService } from "../../../services/auth.service";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.css"],
})
export class NavbarComponent implements OnInit {
  // create a user variable:
  user: any = null;
  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit() {
    // check the user available or not:
    // this.user = this.authService.checkUser();
    this.authService.getCurrentUserStatus()
    .subscribe((user) => {
      this.user = user;
    })
  }
  // implement logout() method:
  logout() {
    // when click the logout button, then navigate or redirect to home page:
    this.authService.logout();
    this.router.navigate(["/login"]);
  }
}
