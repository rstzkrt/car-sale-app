import {Injectable} from '@angular/core';
import {AngularFireAuth} from "@angular/fire/compat/auth";
import {Router} from "@angular/router";
import firebase from "firebase/compat/app";
import 'firebase/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  user:firebase.User;
  constructor(private afAuth: AngularFireAuth, private router: Router) {
    this.afAuth.authState.subscribe(user=>{
      this.user=user;
    });
  }

  async loginWithGoogle() {
   await this.afAuth.signInWithPopup(new firebase.auth.GoogleAuthProvider()).then(
     res =>{
       console.log("Login Success")
       //uid, email, avatar
       //
       //res.additionalUserInfo.isNewUser ise back end ten mongoya user ekle ... ile
     }
   ).catch(err=>{
     console.log("Login Err")
   })
  }
}
