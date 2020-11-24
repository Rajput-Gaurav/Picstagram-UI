// when user leave the route then canDeactivate fires:
import { PostFormComponent } from "./../components/picstagram/post-form/post-form.component";
import { Injectable } from "@angular/core";
import {
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  CanDeactivate,
} from "@angular/router";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
// set canDeactivate for PostFormComponent:
export class PostFormGuard implements CanDeactivate<PostFormComponent> {
  // take instance of postForm Component:
  canDeactivate(postForm: PostFormComponent) {
    if (postForm.formDirty) {
      //if return false then stay on current page:
      return confirm("All Changes would be lost. Are you sure ?");
    } //if return true then go to other page:
    return true;
  }
}
