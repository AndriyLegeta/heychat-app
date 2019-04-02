import { Component, OnInit } from '@angular/core';
import {TokenService} from "../../services/token.service";
import {UserService} from "../../services/user.service";
import {Socket} from 'ngx-socket-io';
@Component({
  selector: 'app-following',
  templateUrl: './following.component.html',
  styleUrls: ['./following.component.css']
})
export class FollowingComponent implements OnInit {

  following =[];
  user: any;

  constructor(
    private tokenService: TokenService,
    private userService: UserService,
    private socket: Socket) { }

  ngOnInit() {
    this.user = this.tokenService.GetPayLoad();
    this.GetUser();
    this.socket.on('refreshPage', (data)=>{
      this.GetUser();
    });
  }

  GetUser(){
    this.userService.GetUserById(this.user._id).subscribe(data=>{
      this.following = data.result.following;
    }, err=> console.log(err))
  }

  unFollowUser(user){
    this.userService.UnFollowUser(user._id).subscribe(data=>{
      console.log(data);
      this.socket.emit('refresh',{});
    })
  }

}
