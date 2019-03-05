import { Component, OnInit } from '@angular/core';
import * as MaterialezeCSS from 'materialize-css';
@Component({
  selector: 'app-authorization',
  templateUrl: './authorization.component.html',
  styleUrls: ['./authorization.component.css']
})
export class AuthorizationComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    const materialezeTabs = document.querySelector('.tabs');
    MaterialezeCSS.Tabs.init(materialezeTabs,{});
  }

}
