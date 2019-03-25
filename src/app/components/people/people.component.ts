import { Component, OnInit } from '@angular/core';
import {UserService} from "../../services/user.service";
import _ from 'lodash';
import {TokenService} from "../../services/token.service";

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent implements OnInit {
  loggedInUser: any;
  users = [];
  constructor(private userService: UserService, private tokenService: TokenService) { }

  ngOnInit() {
    this.loggedInUser = this.tokenService.GetPayLoad();
    this.GetUsers();
  }

  GetUsers(){
    this.userService.GetsAllUsers().subscribe(data =>{
      _.remove(data.result, {name: this.loggedInUser.name})
      this.users = data.result;
    })
  }
}
