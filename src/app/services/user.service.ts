import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from "../common/user";
import { Observable } from "rxjs";
import {Advert} from "../common/advert";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  baseURL: string = "http://localhost:8080/users";

  constructor(private httpClient:HttpClient) { }

  addUser(user:User):Observable<any> {
    const headers = { 'content-type': 'application/json'};
    const body=JSON.stringify(user);
    console.log(body);
    return this.httpClient.post(this.baseURL, body,{'headers':headers});
  }
  //
  // getUserByUid(uid:string):Promise<User>{
  //   const url=`http://localhost:8080/users/search/findByUid?uid=${uid}`;
  //   return this.httpClient.get<User>(url);
  // }

  getAuthenticatedUser():Observable<User>{
    const url=`http://localhost:8080/users/me`;
    return this.httpClient.get<User>(url);
  }
}
