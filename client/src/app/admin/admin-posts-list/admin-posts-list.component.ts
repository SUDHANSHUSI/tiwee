import { Component, Input, OnInit } from '@angular/core';
import Post from '../../models/post.model';
import { PostService } from '../../services/post.service';

@Component({
  selector: 'app-admin-posts-list',
  templateUrl: './admin-posts-list.component.html'
})
export class AdminPostsListComponent implements OnInit {
  @Input() limit = 0;
  postsList!: Post[];

  constructor(
    private postService: PostService
  ) {}

  ngOnInit() {
    this.postService.getPosts()
      .subscribe((posts: Post[]) => {
        this.postsList = posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

        if (this.limit > 0) {
          this.postsList = this.postsList.slice(0, this.limit);
        }
      });
  }

  onDeleteClick(id:string) {
    this.postService.deletePost(id)
      .subscribe(() => {
        this.postsList = this.postsList.filter((post) => post._id !== id);
      });
  }

}
