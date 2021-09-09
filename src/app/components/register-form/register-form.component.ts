import { Component, OnInit } from '@angular/core';
import {User} from "../../common/user";
import {Observable} from "rxjs";

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  saveUser(user:User):Observable<User>{
    return null;
  }
}
