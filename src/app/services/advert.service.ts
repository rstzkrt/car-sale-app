import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {map} from "rxjs/operators";
import {Advert} from '../common/advert';

@Injectable({
  providedIn: 'root'
})
export class AdvertService {

  private baseUrl = "http://localhost:8080/adverts"

  constructor(private httpClient: HttpClient) {
  }

  getAdvertsByBrand(brand: string): Observable<Advert[]> {
    const advertUrl = `http://localhost:8080/adverts/search/findAllByCarBrand?brand=${brand}`;
    return this.httpClient.get<GetResponse>(advertUrl).pipe(
      map(response => response._embedded.adverts)
    );
  }

  getAdvertById(id: string):Observable<Advert>{
    const url = `http://localhost:8080/adverts/${id}`;
    return this.httpClient.get<Advert>(url);
  }

  getAdvertList(): Observable<Advert[]> {
    return this.httpClient.get<GetResponse>(this.baseUrl).pipe(
      map(response => response._embedded.adverts)
    );
  }

  // searchAdverts(theKeyword:string):Observable<Advert[]>{
  //   // const url = `https://car-sale-api.herokuapp.com/adverts/search/findByTitleContaining?keyword=${theKeyword}`;
  //   // return this.httpClient.get<GetResponse>(url).pipe(
  //   //   map(response => response._embedded.adverts)
  //   // );
  //   return null;
  // }
}

interface GetResponse {
  _embedded: {
    adverts: Advert[];
  }
}
