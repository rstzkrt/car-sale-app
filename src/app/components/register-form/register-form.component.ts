import { Component, OnInit } from '@angular/core';
import {AuthServiceService} from "../../services/auth-service.service";

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent implements OnInit {

  constructor(private authService:AuthServiceService) { }

  ngOnInit(): void {
  }

  loginWithGoogle() {
    this.authService.loginWithGoogle();
  }

}
