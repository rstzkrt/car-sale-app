import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Advert} from '../common/advert';
import {AngularFireAuth} from "@angular/fire/compat/auth";
import {AuthServiceService} from "./auth-service.service";

@Injectable({
  providedIn: 'root'
})
export class AdvertService {

  private baseUrl = "https://car-sale-mongodb.herokuapp.com/adverts"

  constructor(private httpClient: HttpClient,public afAuth:AngularFireAuth,private service:AuthServiceService) {
  }

  async getToken():Promise<any>{
    return await (await this.afAuth.currentUser).getIdToken(true);
  }

  getAdvertsByBrand(brand: string): Observable<Advert[]> {
    const advertUrl = `https://car-sale-mongodb.herokuapp.com/adverts/findByBrand/${brand}`;
    return this.httpClient.get<Advert[]>(advertUrl);
  }

  getAdvertById(id: string):Observable<Advert>{
    const url = `https://car-sale-mongodb.herokuapp.com/adverts/${id}`;
    return this.httpClient.get<Advert>(url);
  }

  getAdvertList(): Observable<Advert[]> {
    return this.httpClient.get<Advert[]>(this.baseUrl);
  }

  searchAdverts(theKeyword:string):Observable<Advert[]>{
    const url = `https://car-sale-mongodb.herokuapp.com/adverts/elastic-search/${theKeyword}`;
    return this.httpClient.get<Advert[]>(url);
  }

  createAdvert(advert: Advert, token: string):Observable<any> {
    const headers = { 'content-type': 'application/json','Authorization': `Bearer ${token}`};

    return this.httpClient.post(this.baseUrl, {
      postedBy: advert.postedBy,
      description: advert.description,
      title : advert.description,
      price: advert.price,
      city: advert.city,
      coverPhoto: advert.coverPhoto,
      carBrand: advert.carBrand,
      carTransmission: advert.carTransmission,
      carMileage: advert.carMileage,
      carBodyType: advert.carBodyType,
      carFuelType: advert.carFuelType,
      carCondition: advert.carCondition,
      photos: []
    },{'headers':headers});
  }

  deleteAdvert(advertId:string,token:string):Observable<any>{
    const url=`https://car-sale-mongodb.herokuapp.com/adverts/${advertId}`
    const headers = { 'content-type': 'application/json','Authorization': `Bearer ${token}`};
    return this.httpClient.delete(url,{'headers':headers})
  }


}


interface GetResponse {
  _embedded: {
    adverts: Advert[];
  }
}
