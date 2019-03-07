import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../services/auth.service";
import {Router} from "@angular/router";
import {TokenService} from "../../services/token.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  errorMessage: string;
  showPreloader = false;

  constructor(private formBuilder: FormBuilder, private authService: AuthService, private router: Router,private tokenService: TokenService) { }

  ngOnInit() {
    this.init();
  }
  init(){
    this.loginForm = this.formBuilder.group({
      name: ['', Validators.required],
      password: ['', Validators.required]
    })
  }
  loginUser(){
    this.showPreloader = true;
    this.authService.loginUser(this.loginForm.value).subscribe(data=>{
      this.tokenService.SetToken(data.token);
      this.loginForm.reset();
      setTimeout(()=>{
        this.router.navigate(['streams']);
      },2000);
    },err => {
      this.showPreloader = false;
      if(err.error.msg){
        this.errorMessage = err.error.msg[0].message;
      }
      if(err.error.message){
        this.errorMessage = err.error.message;
      };
    })
  }
}
