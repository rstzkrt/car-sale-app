import {Component, OnInit} from '@angular/core';
import {AdvertService} from "../../services/advert.service";
import {Advert} from "../../common/advert";
import {ActivatedRoute} from "@angular/router";
import {AuthServiceService} from "../../services/auth-service.service";
import {AngularFireAuth} from "@angular/fire/compat/auth";

@Component({
  selector: 'app-advert-list',
  templateUrl: './advert-list-table.component.html',
  styleUrls: ['./advert-list.component.css']
})
export class AdvertListComponent implements OnInit {

  adverts: Advert[];
  currentBrand:string;
  searchMode:boolean;

  clicked:boolean=false;//
  favorite:boolean=false;//

  constructor(private advertService: AdvertService,
              private route:ActivatedRoute,
              public afAuth:AngularFireAuth) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(()=>{
      this.listAdverts();
    })
  }

  isFavorite():void{//
    this.favorite=!this.favorite;
  }
  isClicked():void{//
    this.clicked=!this.clicked;
  }

  listAdverts() {
    const hasBrand:boolean = this.route.snapshot.paramMap.has('brand')
    this.searchMode = this.route.snapshot.paramMap.has('keyword')

    if(hasBrand){
      this.currentBrand=this.route.snapshot.paramMap.get('brand');
      this.advertService.getAdvertsByBrand(this.currentBrand).subscribe(
        data => {
          this.adverts = data;
        }
      )
    }
    else if (this.searchMode){
      const keyword:string =this.route.snapshot.paramMap.get('keyword')
      this.advertService.searchAdverts(keyword).subscribe(
        data => {
          this.adverts = data;
        }
      )
    }
    else {
      this.advertService.getAdvertList().subscribe(
        data => {
          this.adverts = data;
        }
      )
    }
  }
}
