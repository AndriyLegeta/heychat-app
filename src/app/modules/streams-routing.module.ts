import { NgModule } from '@angular/core';
import {Routes, RouterModule} from "@angular/router";
import {StreamsComponent} from "../components/streams/streams.component";
import {AuthGuard} from "../services/auth.guard";
import {ComentsComponent} from "../components/coments/coments.component";

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
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class StreamsRoutingModule { }
