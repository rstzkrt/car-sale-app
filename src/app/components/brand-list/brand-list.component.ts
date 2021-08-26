import { Component, OnInit } from '@angular/core';
import {BrandLogoModel} from "../../common/brand-logo-model";
import {BrandLogoService} from "../../services/brand-logo.service";

@Component({
  selector: 'app-brand-list',
  templateUrl: './brand-list.component.html',
  styleUrls: ['./brand-list.component.css']
})
export class BrandListComponent implements OnInit {

  brandLogo:BrandLogoModel[];

  constructor(private brandLogoService:BrandLogoService) { }

  ngOnInit(): void {
    this.listBrands();
  }

  listBrands():void{
    this.brandLogoService.getBrandLogos().subscribe(
      data=>{
        this.brandLogo=data;//
      }
    )
  }
}
