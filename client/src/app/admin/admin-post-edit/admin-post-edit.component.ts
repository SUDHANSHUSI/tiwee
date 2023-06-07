import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostService } from '../../services/post.service';
import Post from '../../models/post.model';

@Component({
  selector: 'app-admin-post-edit',
  templateUrl: './admin-post-edit.component.html',
})
export class AdminPostEditComponent implements OnInit {
  post!: Post;
  originalTitle = '';

  constructor(
    private route: ActivatedRoute,
    private postService: PostService
  ) {}

  ngOnInit() {
    const id = this.route.snapshot.params['id'];

    this.postService.getPostById(id)
      .subscribe((post: Post) => {
        this.post = post;
        this.originalTitle = post.title;
      });
  }
}
