import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../services/auth.service";
import {FormGroup, FormBuilder, Validators} from "@angular/forms";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  myGroup: FormGroup;
  constructor(private authService: AuthService, private formBuilder: FormBuilder){}

  ngOnInit() {
    this.init()
  }
  init(){
    this.myGroup = this.formBuilder.group({
      name: ['',Validators.required],
      email: ['',[Validators.email, Validators.required]],
      password: ['', Validators.required],

    });
  }
  registerUser(){
    console.log(this.myGroup.value);
    this.authService.registerUser(this.myGroup.value).subscribe(data => {console.log(data)}, err => {
      console.log(err);})
  }
}
