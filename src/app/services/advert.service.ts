import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {map} from "rxjs/operators";
import {Advert} from '../common/advert';

@Injectable({
  providedIn: 'root'
})
export class AdvertService {

  private baseUrl = "https://car-sale-api.herokuapp.com/adverts"

  constructor(private httpClient: HttpClient) {
  }

  getAdvertsByBrand(brand: string): Observable<Advert[]> {
    const advertUrl = `https://car-sale-api.herokuapp.com/advert/advert/car/${brand}/`;
    return this.httpClient.get<Advert[]>(advertUrl);
  }

  getAdvertById(id: number):Observable<Advert>{
    const url = `https://car-sale-api.herokuapp.com/adverts/${id}?projection=advertProjection`;
    return this.httpClient.get<Advert>(url);
  }

  getAdvertList(): Observable<Advert[]> {
    return this.httpClient.get<GetResponse>(this.baseUrl).pipe(
      map(response => response._embedded.adverts)
    );
  }
}

interface GetResponse {
  _embedded: {
    adverts: Advert[];
  }
}
