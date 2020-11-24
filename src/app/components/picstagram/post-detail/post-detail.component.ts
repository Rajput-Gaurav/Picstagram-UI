import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { PostService } from "../../../services/post.service";
import { Post } from "../../../models/post";

@Component({
  selector: "app-post-detail",
  templateUrl: "./post-detail.component.html",
  styleUrls: ["./post-detail.component.css"],
})
export class PostDetailComponent implements OnInit {
  // create a variable name post, to take the data:
  post: Post = null;

  // inject Activated Route and PostService:
  constructor(
    private route: ActivatedRoute,
    private postService: PostService
  ) {}

  ngOnInit() {
    // asynchronus method for getting id:
    // this.route.params.subscribe((p) => console.log(p));
    // ---------------------------------------------------
    // synchronnus method for getting id:
    const id = this.route.snapshot.params.id;
    // call the getSinglePost method:
    this.postService.getSinglePost(id).subscribe((post) => (this.post = post));
  }
}
