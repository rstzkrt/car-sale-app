import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from "../common/user";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  baseURL: string = "https://car-sale-mongodb.herokuapp.com/users";

  constructor(private httpClient:HttpClient) { }

  addUser(user:User):Observable<any> {
    const headers = { 'content-type': 'application/json'};
    const body=JSON.stringify(user);
    console.log(body);
    return this.httpClient.post(this.baseURL, body,{'headers':headers});
  }

  getAuthenticatedUser(token: String) : Observable<User>{
    const url=`https://car-sale-mongodb.herokuapp.com/users/me`;
    const headers = { 'content-type': 'application/json','Authorization': `Bearer ${token}` };
    return this.httpClient.get<User>(url,{'headers': headers});
  }
}
