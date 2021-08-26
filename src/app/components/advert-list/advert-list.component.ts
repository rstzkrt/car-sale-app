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
  gridColumns = 3;

  constructor(private advertService: AdvertService) {}

  ngOnInit(): void {
    this.listAdverts();
  }

  toggleGridColumns() {
    this.gridColumns = this.gridColumns === 3 ? 4 : 3;
  }

  listAdverts() {
    this.advertService.getAdvertList().subscribe(
      data => {
        this.adverts = data;
      }
    )
  }
}
