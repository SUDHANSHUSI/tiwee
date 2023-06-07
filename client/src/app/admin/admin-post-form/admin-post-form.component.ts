import { Component, Input } from '@angular/core';
import { Location } from '@angular/common';
import Post from '../../models/post.model';
import { PostService } from '../../services/post.service';

@Component({
  selector: 'app-admin-post-form',
  templateUrl: './admin-post-form.component.html'
})
export class AdminPostFormComponent {
  @Input() post: Post = {
    _id: '',
    title: '',
    body: '',
    author: '',
    date: new Date(),
    isPublished: false
  };
  @Input() isEditing = false;

  constructor(
    private postService: PostService,
    private location: Location
  ) { }

  onSubmit() {
    if (this.isEditing) {
      this.postService.editPost(this.post._id, this.post).subscribe(() => {
        this.location.back();
      });
      return;
    }

    this.postService.addPost(this.post).subscribe(() => {
      this.location.back();
    });
  }

  onCancelClick() {
    this.location.back();
  }
}
