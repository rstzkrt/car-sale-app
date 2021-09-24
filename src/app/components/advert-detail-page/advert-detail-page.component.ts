import { Component, OnInit } from '@angular/core';
import {AdvertService} from "../../services/advert.service";
import {Advert} from "../../common/advert";
import {ActivatedRoute, Route, Router} from "@angular/router";
import {AngularFireAuth} from "@angular/fire/compat/auth";

@Component({
  selector: 'app-advert-detail-page',
  templateUrl: './advert-detail-page.component.html',
  styleUrls: ['./advert-detail-page.component.css']
})
export class AdvertDetailPageComponent implements OnInit {

  advert:Advert;

  constructor(private advertService:AdvertService,
              private route:ActivatedRoute,
              private router:Router,
              public afAuth:AngularFireAuth) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(()=>{
      this.handleAdvertDetail();
    })
  }

  onDelete(){
    const advertId:string=this.route.snapshot.paramMap.get('id');

    this.advertService.getToken().then((token) => {

      this.advertService.deleteAdvert(advertId, token).subscribe(res => {
        console.log(res)

        this.router.navigateByUrl(`/adverts`)

      }, error => {
        console.error(error)
      });
    })
  }

  onUpdate(){
    //
  }

  handleAdvertDetail(){
    const advertId:string=this.route.snapshot.paramMap.get('id');
    this.advertService.getAdvertById(advertId).subscribe(
      data=>{
        this.advert=data;
      }
    )
  }
}
