import { Component, OnInit } from '@angular/core';
import {AdvertService} from "../../services/advert.service";
import {Advert} from "../../common/advert";

@Component({
  selector: 'app-advert-list',
  templateUrl: './advert-list.component.html',
  styleUrls: ['./advert-list.component.css']
})
export class AdvertListComponent implements OnInit {

  adverts:Advert[]

  constructor(private advertService:AdvertService) { }

  ngOnInit(): void {
  this.listAdverts();
  }

  listAdverts(){
    this.advertService.getAdvertList().subscribe(
      data=>{
        this.adverts=data;
      }
    )
  }
}

