import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AdvertListComponent } from './components/advert-list/advert-list.component';
import {HttpClientModule} from "@angular/common/http";
import {AdvertService} from "./services/advert.service";

@NgModule({
  declarations: [
    AppComponent,
    AdvertListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [AdvertService],
  bootstrap: [AppComponent]
})
export class AppModule { }
