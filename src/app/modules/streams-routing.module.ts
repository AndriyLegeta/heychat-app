import { NgModule } from '@angular/core';
import {Routes, RouterModule} from "@angular/router";
import {StreamsComponent} from "../components/streams/streams.component";
import {AuthGuard} from "../services/auth.guard";
import {ComentsComponent} from "../components/coments/coments.component";
import {PeopleComponent} from "../components/people/people.component";

const routes: Routes = [
  {
    path: 'streams',
    component: StreamsComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'post/:id',
    component: ComentsComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'people',
    component: PeopleComponent,
    canActivate: [AuthGuard]
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class StreamsRoutingModule { }
