import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Hosts} from '../Hosts';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

registerUser(body): Observable<any>{
    return this.http.post(`${Hosts.API_HOST}/api/hey-chatapp/register`, body, {})
}



}
