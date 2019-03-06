import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {AuthorizationModule} from "./modules/authorization.module";
import {AuthRoutingModule} from "./modules/auth-routing.module";
import { StreamsComponent } from './components/streams/streams.component';
import {StreamsModule} from "./modules/streams.module";
import {StreamsRoutingModule} from "./modules/streams-routing.module";



@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AuthorizationModule,
    AuthRoutingModule,
    StreamsModule,
    StreamsRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
