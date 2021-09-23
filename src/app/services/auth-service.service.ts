import {Injectable} from '@angular/core';
import {AngularFireAuth} from "@angular/fire/compat/auth";
import {Router} from "@angular/router";
import firebase from "firebase/compat/app";
import 'firebase/auth';
import {UserService} from "./user.service";
import {User} from "../common/user";
import {authState} from "@angular/fire/auth";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  user:firebase.User;
  reqUser:User=new User();
  currentUser:User;
  isSignedIn:boolean;
  idToken:Observable<string | null>;

  constructor(private afAuth: AngularFireAuth,private userService:UserService, private router: Router) {
    this.afAuth.authState.subscribe( async user => {
      this.user = user;

    });
  }

  logout(){
    this.afAuth.signOut().then(() => {
      console.log("Logged out!")
    });
  }

  async loginWithGoogle() {
   await this.afAuth.signInWithPopup(new firebase.auth.GoogleAuthProvider()).then(
     res =>{

       this.reqUser.uid=res.user.uid
       this.reqUser.email=res.user.email;
       this.reqUser.avatar=res.user.photoURL;
       this.reqUser.firstName=res.user.displayName.split(" ")[0];
       this.reqUser.lastName=res.user.displayName.split(" ")[length];

       this.idToken=this.afAuth.idToken;

       

       if(res.additionalUserInfo.isNewUser){
         this.userService.addUser(this.reqUser).subscribe(
           response => {
             console.log(response);
           },
           error => {
             console.log(error);
           });
       }
       console.log("Login Success")
     }
   ).catch(err=>{
     console.log(err)
   })
  }

  isLoggedIn(){
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.isSignedIn=true;
        return true;
      } else {
        this.isSignedIn=false;
        return false;
      }
    });
  }

}
