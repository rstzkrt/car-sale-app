import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {BrandLogoModel} from "../common/brand-logo-model";

@Injectable({
  providedIn: 'root'
})
export class BrandLogoService {

  private url:string="https://car-brand-logo-api.herokuapp.com/api/model";

  constructor(private httpClient:HttpClient) { }

  getBrandLogos():Observable<BrandLogoModel[]>{
    return this.httpClient.get<BrandLogoModel[]>(this.url);
  }
}
