import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(private http: HttpClient) { }

  getPosts() {
    return this.http.get(environment.API)
  }
  getPostDetails(id) {
    return this.http.get(environment.API + `/${id}`)
  }
  getPostComments(id) {
    return this.http.get(environment.API + `/${id}/comments`)
  }
  createNewPost(body){
    return this.http.post(environment.API, body)
  }
  updatePost(id, body){
    return this.http.put(environment.API + `/${id}`, body)
  }

}
