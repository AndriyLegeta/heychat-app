import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, Validators} from "@angular/forms";
import {PostService} from "../../services/post.service";
import * as moment from "moment";
import {Socket} from 'ngx-socket-io';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  constructor(private postService: PostService, private socket: Socket) { }
  posts =[];
  ngOnInit() {
    this.AllPosts();
    this.socket.on('refreshPage', (data)=>{
      this.AllPosts();
    });
  }
  AllPosts(){
    this.postService.getAllPosts().subscribe(data=>
      this.posts = data.posts)
  }
  TimeFromNow(time){
    return moment(time).fromNow();
  }
  LikePost(post){
    console.log(post);

  }
}
