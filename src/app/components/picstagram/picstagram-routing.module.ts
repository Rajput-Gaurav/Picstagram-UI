import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Routes, RouterModule } from "@angular/router";
// import PostFormGuard:
import { PostFormGuard } from "../../guards/post-form.guard";
// import AuthGuard:
import { AuthGuard } from '../../guards/auth.guard';
import { PostDetailComponent } from "./post-detail/post-detail.component";
import { PostFormComponent } from "./post-form/post-form.component";
import { ProfileComponent } from "./profile/profile.component";

// create a child route for picstagram components:
const routes: Routes = [
  { path: "", component: ProfileComponent, canActivate: [AuthGuard] },
  {
    path: "posts/add",
    component: PostFormComponent,
    canDeactivate: [PostFormGuard], //use canDeactivate route guard for PostFormComponent:
  },
  { path: "posts/detail/:id", component: PostDetailComponent },
];
@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PicstagramRoutingModule {}
