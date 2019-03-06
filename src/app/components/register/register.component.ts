import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../services/auth.service";
import {FormGroup, FormBuilder, Validators} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  errorMessage: string;
  constructor(private authService: AuthService, private formBuilder: FormBuilder, private router: Router){}

  ngOnInit() {
    this.init()
  }
  init(){
    this.registerForm = this.formBuilder.group({
      name: ['',Validators.required],
      email: ['',[Validators.email, Validators.required]],
      password: ['', Validators.required],

    });
  }
  registerUser(){
    console.log(this.registerForm.value);
    this.authService.registerUser(this.registerForm.value).subscribe(data => {
      console.log(data);
    this.registerForm.reset();
      this.router.navigate(['streams']);
    }, err => {
      console.log(err)
      if(err.error.msg){
        this.errorMessage = err.error.msg[0].message;
      }
      if(err.error.message){
        this.errorMessage = err.error.message;
      };
    })
  }
}
