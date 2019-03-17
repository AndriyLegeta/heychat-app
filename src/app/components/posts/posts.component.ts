import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, Validators} from "@angular/forms";
import {PostService} from "../../services/post.service";
import * as moment from "moment";
import {Socket} from 'ngx-socket-io';
import _date = moment.unitOfTime._date;
import _ from 'lodash';
import {TokenService} from "../../services/token.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  constructor(private postService: PostService,
              private socket: Socket,
              private tokenService: TokenService,
              private router: Router) { }
  posts =[];
  user: any;

  ngOnInit() {
    this.user = this.tokenService.GetPayLoad();
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
    this.postService.addLike(post).subscribe(data =>  {console.log(data);
    this.socket.emit('refresh',{})
    }, error => console.log(error)
    );
  }
  CheckInLikesArray(arr, name){
    return _.some(arr, {name: name});
  }
  OpenComentBox(post){
   this.router.navigate(['post', post._id]);
  }
}
