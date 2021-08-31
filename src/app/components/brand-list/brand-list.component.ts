import {Component, OnInit} from '@angular/core';
import {BrandLogoModel} from "../../common/brand-logo-model";
import {BrandLogoService} from "../../services/brand-logo.service";

@Component({
  selector: 'app-brand-list',
  templateUrl: './brand-list.component.html',
  styleUrls: ['./brand-list.component.css']
})
export class BrandListComponent implements OnInit {

  //brandLogo:BrandLogoModel[];

  brands: any[] = [
    {name: "Tesla", logo: "tesla-logo.png"},
    {
      name: "BMW",
      logo: "bmw-logo.png"
    }, {name: "Ferrari", logo: "ferrari-logo.png"}, {
      name: "Ford",
      logo: "ford-logo.png"
    }, {name: "Porsche", logo: "porsche-logo.png"}, {
      name: "Honda",
      logo: "honda-logo.png"
    }, {name: "Lamborghini", logo: "lamborghini-logo.png"}, {
      name: "Toyota",
      logo: "toyota-logo.png"
    }, {name: "Bentley", logo: "bentley-logo.png"}, {
      name: "Maserati",
      logo: "maserati-logo.png"
    }, {name: "Audi", logo: "audi-logo.png"}, {
      name: "Jeep",
      logo: "jeep-logo.png"
    }, {name: "Subaru", logo: "subaru-logo.png"}, {
      name: "Cadillac",
      logo: "cadillac-logo.png"
    }, {
      name: "Chrysler",
      logo: "chrysler-logo.png"
    }, {
      name: "Chevrolet Corvette",
      logo: "corvette-logo.png"
    }, {name: "Dodge", logo: "dodge-logo.png"}, {
      name: "Hyundai",
      logo: "hyundai-logo.png"
    }, {name: "Jaguar", logo: "jaguar-logo.png"}, {
      name: "Mazda",
      logo: "mazda-logo.png"
    }, {
      name: "Ford Mustang",
      logo: "ford-mustang-logo.png"
    }, {name: "Nissan", logo: "nissan-logo.png"}, {
      name: "Alfa Romeo",
      logo: "alfa-romeo-logo.png"
    }, {name: "Bugatti", logo: "bugatti-logo.png"},
    {name: "Lexus", logo: "lexus-logo.png"}, {
      name: "Rolls-Royce",
      logo: "rolls-royce-logo.png"
    }, {
      name: "Aston Martin",
      logo: "aston-martin-logo.png"
    }, {name: "Chevrolet", logo: "chevrolet-logo.png"}, {
      name: "Kia",
      logo: "kia-logo.png"
    }, {
      name: "Mercedes-Benz",
      logo: "mercedes-benz-logo.png"
    }, {name: "Volkswagen", logo: "volkswagen-logo.png"}, {
      name: "Volvo",
      logo: "volvo-logo.png"
    }, {name: "McLaren", logo: "mclaren-logo.png"}, {
      name: "Mitsubishi",
      logo: "mitsubishi-logo.png"
    }, {
      name: "Infiniti",
      logo: "infiniti-logo.png"
    }, {
      name: "Peugeot",
      logo: "peugeot-logo.png"
    }
    , {
      name: "Saab",
      logo: "saab-logo.png"
    }, {
      name: "Suzuki",
      logo: "suzuki-logo.png"
    }, {name: "Citroën", logo: "citroen-logo.png"}, {
      name: "Fiat",
      logo: "fiat-logo.png"
    }, {name: "Lotus", logo: "lotus-logo.png"}, {
      name: "Mini",
      logo: "mini-logo.png"
    }, {name: "BMW M", logo: "bmw-m-logo.png"},
    {name: "Land Rover", logo: "land-rover-logo.png"}, {
      name: "Maybach",
      logo: "maybach-logo.png"
    },
    {name: "Renault", logo: "renault-logo.png"}
    , {name: "Koenigsegg", logo: "koenigsegg-logo.png"}, {
      name: "Škoda",
      logo: "skoda-logo.png"
    }, {name: "Opel", logo: "opel-logo.png"}, {
      name: "Smart",
      logo: "smart-logo.png"
    }, {name: "Alpine", logo: "alpine-logo.png"},
    {name: "Pagani", logo: "pagani-logo.png"},
    {
      name: "Abarth",
      logo: "abarth-logo.png"
    }, {name: "Hummer", logo: "hummer-logo.png"}, {
      name: "SEAT",
      logo: "seat-logo.png"
    }, {
      name: "Mercedes-AMG",
      logo: "mercedes-amg-logo.png"
    }, {name: "Dacia", logo: "dacia-logo.png"},
  ];

  constructor(private brandLogoService: BrandLogoService) {
  }

  ngOnInit(): void {
    // this.listBrands();
  }

  // listBrands():void{
  //   this.brandLogoService.getBrandLogos().subscribe(
  //     data=>{
  //       this.brandLogo=data;
  //     }
  //   )
  // }
}
