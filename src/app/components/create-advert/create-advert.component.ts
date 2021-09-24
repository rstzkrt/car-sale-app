import { Component, OnInit } from '@angular/core';
import {AdvertService} from "../../services/advert.service";
import {AngularFireAuth} from "@angular/fire/compat/auth";
import {FormBuilder, FormGroup} from "@angular/forms";
import {AuthServiceService} from "../../services/auth-service.service";
import {UserService} from "../../services/user.service";
import {Router} from "@angular/router";

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
              private formBuilder:FormBuilder,
              private route:Router) { }
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

  OnSubmit() : void {
    let advert = this.checkoutFormGroup.get('advert').value;
    advert.postedBy = this.authService.currentUser.id;
    console.log(advert)

    this.advertService.getToken().then((token) => {
      this.advertService.createAdvert(advert, token).subscribe(res => {
        console.log(res)
        this.route.navigateByUrl(`/adverts`)
      }, error => {
        console.error(error)
      });
    })
  }

}
