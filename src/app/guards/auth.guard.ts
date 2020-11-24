// implement routeGuard for user security:
// authGuard is using for check user is present or not:
// when user come in the the route then canActivate fires:
import { Injectable } from "@angular/core";
import {
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  CanActivate,
} from "@angular/router";
import { Observable } from "rxjs";
// import authService for check user:
import { AuthService } from "../services/auth.service";
// import router for navigate():
import { Router } from "@angular/router";

@Injectable({
  providedIn: "root",
})
// make canActivate:
export class AuthGuard implements CanActivate {
  constructor(private router: Router, private authService: AuthService) {}
  // canActivate is a method, which is return promise, observable or boolean:
  canActivate() {
    if (this.authService.checkUser()) {
      //if its a user then return true and go further:
      return true;
    } else {
      //if not a user then redirect too home page and return false:
      this.router.navigate(["/login"]);
      return false;
    }
  }
}
