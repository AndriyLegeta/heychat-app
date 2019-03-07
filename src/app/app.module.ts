import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {AuthorizationModule} from "./modules/authorization.module";
import {AuthRoutingModule} from "./modules/auth-routing.module";
import {StreamsModule} from "./modules/streams.module";
import {StreamsRoutingModule} from "./modules/streams-routing.module";
import {CookieService} from "ngx-cookie-service";




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
  providers: [CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
