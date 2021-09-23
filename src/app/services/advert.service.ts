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

  private baseUrl = "http://localhost:8080/adverts"

  constructor(private httpClient: HttpClient,public afAuth:AngularFireAuth,private service:AuthServiceService) {
  }

  async getToken():Promise<any>{
    return await (await this.afAuth.currentUser).getIdToken(true);
  }

  getAdvertsByBrand(brand: string): Observable<Advert[]> {
    const advertUrl = `http://localhost:8080/adverts/findByBrand/${brand}`;
    return this.httpClient.get<Advert[]>(advertUrl);
  }

  getAdvertById(id: string):Observable<Advert>{
    const url = `http://localhost:8080/adverts/${id}`;
    return this.httpClient.get<Advert>(url);
  }

  getAdvertList(): Observable<Advert[]> {
    return this.httpClient.get<Advert[]>(this.baseUrl);
  }

  searchAdverts(theKeyword:string):Observable<Advert[]>{
    const url = `http://localhost:8080/adverts/elastic-search/${theKeyword}`;
    return this.httpClient.get<Advert[]>(url);
  }

  createAdvert(advert:Advert):Observable<any> {
const token="eyJhbGciOiJSUzI1NiIsImtpZCI6ImFlNTJiOGQ4NTk4N2U1OWRjYWM2MmJlNzg2YzcwZTAyMDcxN2I0MTEiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiRnVubnlNb21lbnRzIiwicGljdHVyZSI6Imh0dHBzOi8vbGgzLmdvb2dsZXVzZXJjb250ZW50LmNvbS9hLS9BT2gxNEdpSlRXWmxHSW1tTWs5eHRDazh6N3RmMjZQYzlSdjZCNERRd0NncD1zOTYtYyIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9jYXItc2FsZS1hdXRoIiwiYXVkIjoiY2FyLXNhbGUtYXV0aCIsImF1dGhfdGltZSI6MTYzMjQwNDc5NiwidXNlcl9pZCI6IjVWYWxPSTAxQXBXazdMMVZKcVk0TmgwckF4OTMiLCJzdWIiOiI1VmFsT0kwMUFwV2s3TDFWSnFZNE5oMHJBeDkzIiwiaWF0IjoxNjMyNDA3NDQzLCJleHAiOjE2MzI0MTEwNDMsImVtYWlsIjoidGhlY2F2YWxyeWR3QGdtYWlsLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJmaXJlYmFzZSI6eyJpZGVudGl0aWVzIjp7Imdvb2dsZS5jb20iOlsiMTEwMjEzODk3MDYxNzYyOTQwNjI0Il0sImVtYWlsIjpbInRoZWNhdmFscnlkd0BnbWFpbC5jb20iXX0sInNpZ25faW5fcHJvdmlkZXIiOiJnb29nbGUuY29tIn19.cxKAF1LX74XqERmaL9JtGYsslmKc4y4PQOFSFmj3hAa86VZwUYN86Nbbgt5twFXI5SvmZ_OJz_uPnQ4o77A7oVNc8mOzuLpLpZflOcL_YuHFfK__2-64-yZulva7yFIij0lY4vRXq5PnvXf2TT6hRyBq2PM2TBJsvFPT7g1yUt6bDKn9jJkpoIeSRgkU95WKanttT7k-EmnkTbqzbQa9N-nrP0fsZ_1gG5GNUV1J7imW_-qqeoKReP0UMTuklNWcFOUZIEmWdsrBXeV_sC0Z6KTeRgLYWlZNgQfTQmNipnNTKiOlk8XO25Lm90gyOCAd7_dr2-ygf-5h_Zsn2TLOIg";

    // this.getToken().then(token => {
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
    // })
  }
}


interface GetResponse {
  _embedded: {
    adverts: Advert[];
  }
}
