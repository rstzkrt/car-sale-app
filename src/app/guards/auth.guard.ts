import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import {AngularFireAuth} from "@angular/fire/compat/auth";

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
 constructor(private afAuth:AngularFireAuth,private router: Router) {
 }
  async canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Promise<boolean | UrlTree> {
    const user = await this.afAuth.currentUser;
    const isAuthenticated:boolean=user ? true: false;
    if (!isAuthenticated){
      alert("You are not authenticated")
      await this.router.navigateByUrl(`user-login`);
    }
    return isAuthenticated;
  }

}
