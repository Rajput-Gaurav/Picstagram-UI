// create auth service for check username, password,
//or user login or not:
import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { baseUrl } from '../config/api';
import { map } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: "root",
})
export class AuthService {

  loginUrl = baseUrl + '/login'
  registerUrl = baseUrl + '/register'
  //create instance or object of subject:
  subject = new Subject();

  constructor(private http: HttpClient) {}

  // call the Register API:
  register(userData){
    return this.http.post(this.registerUrl, userData)
  }

  // call the Login API:
  login(creds) {
    return this.http.post(this.loginUrl, creds)
      .pipe(
        map(data => {
          localStorage.setItem('user', JSON.stringify(data));
          // check user available or not:
          this.subject.next(this.checkUser());
          return data;
        })
      )

    // const { username, password } = creds;
    // // TODO: API Call:
    // if (username === "admin" && password === "admin") {
    //   // if username and password match then add the user in localstorage:
    //   localStorage.setItem("user", username);
    //   return true;
    // }
    // return false;
  }

  // logout method():
  // destroy the user or remove from localStorage:
  logout() {
    localStorage.removeItem("user");
    // check user available or not:
    this.subject.next(this.checkUser());
  }
  // checkUser method():
  // check the user available in localStorage or not:
  checkUser() {
    return JSON.parse(localStorage.getItem("user"));
  }

  // check status of user():
  // and return subject as observable:
  getCurrentUserStatus(){
    return this.subject.asObservable();
  }
}
