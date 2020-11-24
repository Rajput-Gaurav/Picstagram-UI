import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/services/post.service';
import { MessageService } from 'src/app/services/message.service';
import { Post } from 'src/app/models/post';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {

  posts: Post[] = [];

  constructor(
    private postService: PostService,
    private messageService: MessageService
  ) { }

  ngOnInit() {
    this.getPosts()
    this.messageService.getMsg()
      .subscribe(() => {
        this.getPosts()
      })
  }

  getPosts() {
    this.postService.getPosts()
      .subscribe((posts: Post[]) => {
        this.posts = posts;
      })
  }
}
