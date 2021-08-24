import {Advert} from "./advert";
import {Report} from "./report";


export class AppUser {

  firstName:string;
  lastName:string;
  email:string;
  role:string;
  avatar:string;
  dateOfBirth:Date;
  adverts:Advert[];
  reports:Report[];
}
