import { Component, OnInit } from '@angular/core';
import {AdvertService} from "../../services/advert.service";
import {AngularFireAuth} from "@angular/fire/compat/auth";
import {Advert} from "../../common/advert";
import {User} from "../../common/user";
import {FormBuilder, FormGroup} from "@angular/forms";
import {AuthServiceService} from "../../services/auth-service.service";
import {UserService} from "../../services/user.service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-create-advert',
  templateUrl: './create-advert.component.html',
  styleUrls: ['./create-advert.component.css']
})
export class CreateAdvertComponent implements OnInit {

  checkoutFormGroup:FormGroup;

  constructor(private userService:UserService,
              private advertService:AdvertService,
              private authService:AuthServiceService,
              private afAuth:AngularFireAuth,
              private formBuilder:FormBuilder) { }

  ngOnInit(): void {
    this.checkoutFormGroup=this.formBuilder.group({
      advert:this.formBuilder.group({
        description: [''],
        title: [''],
        price:[''],
        city: [''],
        coverPhoto:[''],
        postedBy: [''],
        carBrand:[''],
        carTransmission:[''],
        carMileage:[''],
        carBodyType:[''],
        carFuelType:[''],
        carCondition:[''],
        photos:['']
      })
    })
  }


  createAdvert() : Observable<any> {
    let advert = this.checkoutFormGroup.get('advert').value;
    advert.postedBy = "614ba7f3dff5b07bcd8ab200";
    console.log(advert)

    return this.advertService.createAdvert(advert);
  }

  // createAdvert(advert:Advert):Promise<any>{
  //
  //   this.checkoutFormGroup.get('advert').value.postedBy = "614ba7f3dff5b07bcd8ab200";
  //   console.log(advert)
  //   return this.advertService.createAdvert(advert);
  //
  // }
  //
  // async OnSubmit() {
  //   await this.createAdvert(this.checkoutFormGroup.get('advert').value);
  //
  // }
}
