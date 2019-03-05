import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AuthorizationComponent} from "../components/authorization/authorization.component";
import { LoginComponent } from '../components/login/login.component';
import { RegisterComponent } from '../components/register/register.component';
import {AuthService} from "../services/auth.service";
import {HttpClientModule} from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [AuthorizationComponent, LoginComponent, RegisterComponent],
  imports: [CommonModule, HttpClientModule, FormsModule, ReactiveFormsModule],
  exports: [AuthorizationComponent, LoginComponent, RegisterComponent],
  providers: [AuthService]
})
export class AuthorizationModule { }
