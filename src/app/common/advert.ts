import {User} from "./user";

export class Advert {
  id:string;
  description: string;
  title: string;
  price: number;
  city: string;
  postDate: Date;
  coverPhoto:String[];
  postedBy: string;

  carBrand:string;
  carTransmission:string;
  carMileage:number;
  carBodyType:string;
  carFuelType:string;
  carCondition:string;
  photos:string[];
  postedByUser:User;
}
