import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
// import FormsModule for ngModel and forms integration:
import { FormsModule } from "@angular/forms";
// import picstagram-routing module:
import { PicstagramRoutingModule } from "./picstagram-routing.module";

// import components for picstagram module:
import { PicstagramComponent } from "./picstagram.component";
import { ProfileComponent } from "./profile/profile.component";
import { PostListComponent } from "./profile/post-list/post-list.component";
import { PostItemComponent } from "./profile/post-list/post-item/post-item.component";
import { PostFormComponent } from "./post-form/post-form.component";
import { SummaryComponent } from "./profile/summary/summary.component";
import { PostDetailComponent } from "./post-detail/post-detail.component";
// import directive:
import { HighlightDirective } from "./directives/highlight.directive";
import { MyUppercasePipe } from './pipes/my-uppercase.pipe';
import { SearchPipe } from './pipes/search.pipe';

@NgModule({
  declarations: [
    PicstagramComponent,
    ProfileComponent,
    PostListComponent,
    PostListComponent,
    PostItemComponent,
    PostFormComponent,
    SummaryComponent,
    PostDetailComponent,
    HighlightDirective,
    MyUppercasePipe,
    SearchPipe,
  ],

  imports: [CommonModule, FormsModule, PicstagramRoutingModule],
  // export only one component which is main component:
  exports: [PicstagramComponent],
})
export class PicstagramModule {}
