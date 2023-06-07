import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import Post from '../../models/post.model';
import { PostService } from '../../services/post.service';
import { PageTitleService } from '../../services/page-title.service';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html'
})
export class PostDetailsComponent {
  post!: Post;

  constructor(
    private route: ActivatedRoute,
    private postService: PostService,
    private pageTitleService: PageTitleService
  ) {
    const id = route.snapshot.params['id'];

    postService.getPostById(id)
      .subscribe((post: Post) => {
        this.post = post;
        this.pageTitleService.changeTitle(this.post.title);
      });
  }
}
