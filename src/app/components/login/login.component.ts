import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { AuthService } from "../../services/auth.service";
import { MessageService } from "../../services/message.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
})
export class LoginComponent implements OnInit {
  model: any = {};

  // inject router into constructor:
  // inject authService:
  // inject messageService:
  constructor(
    private router: Router,
    private authService: AuthService,
    private messageService: MessageService
  ) {}

  ngOnInit() {}

  // implement login() method:
  login() {
    this.authService.login(this.model)
    .subscribe(() => {
      this.router.navigate(["/profile"]);
    }, (err) => {
      this.messageService.setMsg({msg: 'Invalid Credentials.', type: 'danger'})
    })

    // if (this.authService.login(this.model)) {
    //   // redirect to profile:
    //   // use navigate() method to redirect or go to appropriate page:
    //   this.router.navigate(["/profile"]);
    // } else {
    //   //if username and password not match then send error:
    //   this.messageService.setMsg({
    //     msg: "Invalid Credentials.",
    //     type: "danger",
    //   });
    // }
  }
}
