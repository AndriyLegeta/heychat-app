import { NgModule } from '@angular/core';
import {Routes, RouterModule} from "@angular/router";
import {AuthorizationComponent} from "../components/authorization/authorization.component";

const routes: Routes = [
  {
    path: '', component: AuthorizationComponent
  }
  ];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
