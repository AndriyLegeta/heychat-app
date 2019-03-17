import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Hosts} from '../Hosts';
@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) { }

  addPost(body): Observable<any> {
    return this.http.post(`${Hosts.API_HOST}/api/hey-chatapp/post/add-post`, body, {});
  }
  getAllPosts(): Observable<any> {
    return this.http.get(`${Hosts.API_HOST}/api/hey-chatapp/posts`);
  }

  addLike(body): Observable<any> {
    return this.http.post(`${Hosts.API_HOST}/api/hey-chatapp/post/add-like`, body, {});
  }

  addComment(postId, comment): Observable<any> {
    return this.http.post(`${Hosts.API_HOST}/api/hey-chatapp/post/add-comment`, {
      postId,
      comment
    });
  }
  getPost(id): Observable<any> {
    return this.http.get(`${Hosts.API_HOST}/api/hey-chatapp/post/${id}`);
  }
}
