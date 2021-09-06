import {Advert} from "./advert";

export class User {
  id:string;
  firstName:string;
  lastName:string;
  email:string;
  role:string;
  avatar:string;
  dateOfBirth:Date;
  myAdverts:Advert[];
  favourites:Map<string,boolean>;
}
