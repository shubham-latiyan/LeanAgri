import { Component, OnInit } from '@angular/core';
import { PostsService } from '../posts.service';
import { FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-show-posts',
  templateUrl: './show-posts.component.html',
  styleUrls: ['./show-posts.component.css']
})
export class ShowPostsComponent implements OnInit {
  posts: Array<Object>;
  totalPosts: Number;
  isCreate: Boolean = false;
  loading: Boolean = false;
  isEdit: Boolean = false;
  currentIndex: Number;
  obj: any = {
    title: "",
    body: "",
    userId: 0
  }

  postForm = this.fb.group({
    title: ['', Validators.required],
    userId: ['', Validators.required],
    body: ['', Validators.required]
  });

  constructor(private _ps: PostsService, private fb: FormBuilder) { }

  ngOnInit() {
    this.getPosts();
  }

  getPosts() {
    this.loading = true;
    this._ps.getPosts().subscribe((data: any) => {
      this.loading = false;
      this.posts = data;
      this.totalPosts = data.length;
    })
  }
  onSubmit() {
    this.loading = true;
    this._ps.createNewPost(this.postForm.value).subscribe((data: any) => {
      this.posts.unshift(data);
      this.loading = false;
      this.isCreate = false;
      this.postForm.reset();
    })

  }
  editPost(index, item) {
    this.currentIndex = index;
    this.isEdit = true;
    this.obj.title = item.title;
    this.obj.body = item.body;
    this.obj.userId = item.userId;
  }
  updatePost(id) {
    this.loading = true;
    this._ps.updatePost(id, this.obj).subscribe((data: any) => {
      this.currentIndex = Math.random();
      let index = this.posts.findIndex((a: any) => a.id == data.id)
      this.posts.splice(index, 1, data)
      this.loading = false;
    })
  }

}
