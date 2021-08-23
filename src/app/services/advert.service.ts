import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {map} from "rxjs/operators";
import { Advert } from '../common/advert';

@Injectable({
  providedIn: 'root'
})
export class AdvertService {

  private baseUrl="https://car-sale-api.herokuapp.com/adverts"

  constructor(private httpClient:HttpClient) {}

    getAdvertList():Observable<Advert[]>{
    return this.httpClient.get<GetResponse>(this.baseUrl).pipe(
      map(response=>response._embedded.adverts)
    );
    }
}

interface GetResponse{
  _embedded:{
    adverts:Advert[];
  }
}
