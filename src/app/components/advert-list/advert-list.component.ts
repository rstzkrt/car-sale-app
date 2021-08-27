import {Component, OnInit} from '@angular/core';
import {AdvertService} from "../../services/advert.service";
import {Advert} from "../../common/advert";

@Component({
  selector: 'app-advert-list',
  templateUrl: './advert-list-table.component.html',
  styleUrls: ['./advert-list.component.css']
})
export class AdvertListComponent implements OnInit {
  adverts: Advert[];
  clicked:boolean=false;
  favorite:boolean=false;

  constructor(private advertService: AdvertService) {}

  ngOnInit(): void {
    this.listAdverts();
  }

  isFavorite():void{
    this.favorite=!this.favorite;
  }
  isClicked():void{
    this.clicked=!this.clicked;
  }

  listAdverts() {
    this.advertService.getAdvertList().subscribe(
      data => {
        this.adverts = data;
      }
    )
  }
}
