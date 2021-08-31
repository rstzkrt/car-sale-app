import {Image} from "./image";
import {Car} from "./car";
import {AppUser} from "./app-user";
import {Report} from "./report";

export class Advert {
  advertId:number;
  description: string;
  title: string;
  price: number;
  address: string;
  postDate: Date;
  images:Image[];
  car:Car;
  postedBy: AppUser;
  reports:Report[]
}


