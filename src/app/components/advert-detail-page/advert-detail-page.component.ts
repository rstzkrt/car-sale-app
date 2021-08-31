import { Component, OnInit } from '@angular/core';
import {AdvertService} from "../../services/advert.service";
import {Advert} from "../../common/advert";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-advert-detail-page',
  templateUrl: './advert-detail-page.component.html',
  styleUrls: ['./advert-detail-page.component.css']
})
export class AdvertDetailPageComponent implements OnInit {

  advert:Advert=new Advert();

  constructor(private advertService:AdvertService, private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(()=>{
      this.handleAdvertDetail();
    })
  }

  handleAdvertDetail(){
    const advertId:number=+this.route.snapshot.paramMap.get('id');
    this.advertService.getAdvertById(advertId).subscribe(
      data=>{
        this.advert=data;
      }
    )
  }

}
