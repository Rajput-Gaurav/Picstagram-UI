import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
// import passwordMatch class:
// import mustContainSymbol class:
import { passwordMatch, mustContainSymbol } from "./register.validators";
import { MessageService } from '../../services/message.service';

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.css"],
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;

  constructor(private builder: FormBuilder,
              private router: Router, 
              private authService: AuthService,
              private messageService: MessageService) {}

  ngOnInit() {
    this.buildForm();
  }

  buildForm() {
    this.registerForm = this.builder.group(
      {
        name: ["", { validators: Validators.required }],
        email: ["", { validators: [Validators.required, Validators.email] }],
        username: ["", { validators: Validators.required }],
        password: [
          "",
          {
            validators: [
              Validators.required,
              Validators.minLength(6),
              mustContainSymbol,
            ],
          },
        ],
        confirmPassword: "",
      },
      {
        validators: passwordMatch,
      }
    );
  }
  // subscribe register method:
  register() {
    this.authService.register(this.registerForm.value)
    .subscribe(() => {
      this.messageService.setMsg({msg: 'Registration Successful! Please Login'})
      this.router.navigate(['/login'])
    }, () => {})
  }
}
