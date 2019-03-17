import {Component, OnInit} from '@angular/core';
import {FormGroup, FormBuilder, Validators} from "@angular/forms";
import {PostService} from "../../services/post.service";
import {ActivatedRoute} from "@angular/router";
import {Socket} from 'ngx-socket-io';
import * as moment from "moment";

@Component({
  selector: 'app-coments',
  templateUrl: './coments.component.html',
  styleUrls: ['./coments.component.css']
})
export class ComentsComponent implements OnInit {
  toolBarElement: any;
  commentForm: FormGroup;
  postId: any;
  commentsArray = [];
  post: string;


  constructor(private  fb: FormBuilder,
              private postService: PostService,
              private  route: ActivatedRoute,
              private socket: Socket) { }

  ngOnInit() {
    this.toolBarElement = document.querySelector('.nav-content');
    this.toolBarElement.style.display = 'none';
    this.init();
    this.postId = this.route.snapshot.paramMap.get('id');
    this.GetPost();
    this.socket.on('refreshPage', (data)=>{
      this.GetPost();
    });
  }

  init(){
    this.commentForm  = this.fb.group({
      comment: ['', Validators.required]
    })
  }

  AddComment(){
    this.postService.addComment(this.postId, this.commentForm.value.comment)
      .subscribe(data=> console.log(data));
    this.socket.emit('refresh', {});
    this.commentForm.reset();

  }
  GetPost(){
    this.postService.getPost(this.postId).subscribe(data =>{
      console.log(data)
        this.post = data.post.post;
        this.commentsArray = data.post.comments.reverse();
    });
  }
  TimeFromNow(time){
    return moment(time).fromNow();
  }
}
