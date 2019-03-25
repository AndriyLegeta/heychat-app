import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Hosts} from '../Hosts'
import {Observable} from "rxjs";
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) {}

  GetsAllUsers(): Observable<any>{
   return this.http.get(`${Hosts.API_HOST}/api/hey-chatapp/users`);
  }
}
