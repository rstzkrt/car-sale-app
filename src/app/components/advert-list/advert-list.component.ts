import { Component, OnInit } from '@angular/core';
import {AdvertService} from "../../services/advert.service";
import {Advert} from "../../common/advert";

@Component({
  selector: 'app-advert-list',
  templateUrl: './advert-list-table.component.html',
  //templateUrl: './advert-list.component.html',
  styleUrls: ['./advert-list.component.css']
})
export class AdvertListComponent implements OnInit {

  isLayoutTest:boolean=false;
  adverts:Advert[];

  constructor(private advertService:AdvertService) { }

  ngOnInit(): void {
  this.listAdverts();
  }

  changeLayout():void {
  this.isLayoutTest=!this.isLayoutTest;
  }

  listAdverts(){
    this.advertService.getAdvertList().subscribe(
      data=>{
        this.adverts=data;
      }
    )
  }
}
