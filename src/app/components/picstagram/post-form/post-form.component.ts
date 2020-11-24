import { Component, OnInit } from "@angular/core";
import { PostService } from "src/app/services/post.service";
import { MessageService } from "src/app/services/message.service";

@Component({
  selector: "app-post-form",
  templateUrl: "./post-form.component.html",
  styleUrls: ["./post-form.component.css"],
})
export class PostFormComponent implements OnInit {
  caption: string = "";
  description: string = "";
  imageUrl: string = "";
  formDirty: boolean = false;

  constructor(
    private postService: PostService,
    private messageService: MessageService
  ) {}

  ngOnInit() {}

  // create handleChange() method:
  handleChange() {
    // when handleChange() call then formDirty will true:
    this.formDirty = true;
  }

  addPost(): void {
    const data = {
      caption: this.caption,
      description: this.description,
      imageUrl: this.imageUrl,
    };

    this.postService.addPost(data).subscribe(() => {
      this.messageService.setMsg({ msg: "Post Added!", type: "success" });
      this.caption = "";
      this.description = "";
      this.imageUrl = "";
      this.formDirty = false;
    });
  }
}
