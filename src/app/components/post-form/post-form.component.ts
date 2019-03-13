import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {PostService} from "../../services/post.service";

import {Socket} from 'ngx-socket-io';
@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css']
})
export class PostFormComponent implements OnInit {
  postForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private postService: PostService, private socket: Socket) {}

  ngOnInit() {
    this.init();
  }

  init(){
    this.postForm = this.formBuilder.group({
      post: ['', Validators.required],

    })
  }

  SubmitPost(){
    this.postService.addPost(this.postForm.value).subscribe(data =>{
      this.socket.emit('refresh', {data:'Page refresh1'});
      this.postForm.reset();
    });

  }


}
