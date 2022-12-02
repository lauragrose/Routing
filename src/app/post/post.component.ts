import { Component, OnInit } from '@angular/core';
import { Post } from '../post';
import { PostService } from '../post.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  posts: Post[] = [];
  id :any;
  constructor(private postSrv: PostService) {
  }

  ngOnInit(): void {
    this.id = window.location.href.split('/').pop();
    this.postSrv.getSinglePosts(this.id).then((res) => {
      this.posts = res;
      console.log(this.posts)})
  }
}
