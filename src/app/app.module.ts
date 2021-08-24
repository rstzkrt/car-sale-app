import { NgModule } from '@angular/core';
import { MatCardModule } from "@angular/material/card";
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AdvertListComponent } from './components/advert-list/advert-list.component';
import {HttpClientModule} from "@angular/common/http";
import {AdvertService} from "./services/advert.service";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from "@angular/material/button";


@NgModule({
  declarations: [
    AppComponent,
    AdvertListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule
  ],
  providers: [AdvertService],
  bootstrap: [AppComponent]
})
export class AppModule {}
