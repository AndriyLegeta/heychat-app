import { Component, OnInit } from '@angular/core';
import {UserService} from "../../services/user.service";
import _ from 'lodash';
import {TokenService} from "../../services/token.service";
import {Socket} from 'ngx-socket-io';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent implements OnInit {
  loggedInUser: any;
  users = [];
  userArray = [];
  constructor(private userService: UserService,
              private tokenService: TokenService,
              private socket: Socket) { }

  ngOnInit() {
    this.loggedInUser = this.tokenService.GetPayLoad();
    this.GetUsers();
    this.GetUser();
    this.socket.on('refreshPage', ()=>{
      this.GetUsers();
      this.GetUser();
    });
  }

  GetUsers(){
    this.userService.GetsAllUsers().subscribe(data =>{
      _.remove(data.result, {name: this.loggedInUser.name});
      this.users = data.result;
    })
  }

  GetUser(){
    this.userService.GetUserById(this.loggedInUser._id).subscribe(data =>{
      return this.userArray = data.result.following;
    })
  }

  FollowUser(user){
    this.userService.FollowUser(user._id).subscribe(data => {
      this.socket.emit('refresh',{});

    })
  }
  CheckInArray(arr, id){
    const result = _.find(arr, ['userFollowed._id', id]);
    if(result){
      return true;
    } else {
      return false;
    }
  }
}
