import { ProfileComponent } from "./components/picstagram/profile/profile.component";
// create a seprate routing module:
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

// import RouterModule for routing:
import { RouterModule, Routes } from "@angular/router";
// import authGuard:
import { AuthGuard } from "./guards/auth.guard";
// import components:
import { PicstagramComponent } from "./components/picstagram/picstagram.component";
import { LoginComponent } from "./components/login/login.component";
import { RegisterComponent } from "./components/register/register.component";
import { PostFormComponent } from "./components/picstagram/post-form/post-form.component";
import { PageNotFoundComponent } from "./components/shared/page-not-found/page-not-found.component";

// create a array of routes:
const routes: Routes = [
  { path: "", redirectTo: "/login", pathMatch: "full" }, //redirect route:
  {
    path: "profile",
    component: PicstagramComponent,
    // children: [
    //   //use children route property:
    //   { path: "", component: ProfileComponent },
    //   { path: "posts/add", component: PostFormComponent },
    // ],
    // use lazy-loading:
    // loadchildren is a function that import picstagrammodule and ruturn picstagrammodule:
    loadChildren: () =>
      import("./components/picstagram/picstagram.module").then(
        (m) => m.PicstagramModule
      ),
    // implement canActivete routeGuard:
    canActivate: [AuthGuard], //first authguard is run then its goes too profile:
  },
  // { path: "posts/add", component: PostFormComponent },
  { path: "login", component: LoginComponent },
  { path: "register", component: RegisterComponent },
  { path: "**", component: PageNotFoundComponent }, //create wildcard route:
];

@NgModule({
  declarations: [],
  // import and export RouterModule:
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
