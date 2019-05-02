import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostsService } from '../posts.service';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css']
})
export class PostDetailsComponent implements OnInit {
  postId: String;
  post: Array<Object>;
  comments: Array<Object>;
  toalComments: Number;
  loading: Boolean = false;

  constructor(private router: ActivatedRoute, private _ds: PostsService) { }

  ngOnInit() {
    this.router.params.subscribe((param: any) => {
      this.postId = param.id;
    })
    this.postDetails(this.postId)
  }

  postDetails(id) {
    this.loading = true;
    this._ds.getPostDetails(id).subscribe((data: any) => {
      this.post = Array.of(data);
    })
    this._ds.getPostComments(id).subscribe((data: any) => {
      this.comments = data;
      this.toalComments = data.length;
      this.loading = false;
    })
  }

}