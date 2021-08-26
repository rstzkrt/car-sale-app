import {NgModule} from '@angular/core';
import {MatCardModule} from "@angular/material/card";
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {AdvertListComponent} from './components/advert-list/advert-list.component';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {AdvertService} from "./services/advert.service";
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {FlexLayoutModule} from "@angular/flex-layout";
import {MatToolbarModule} from "@angular/material/toolbar";
import { BrandListComponent } from './components/brand-list/brand-list.component';
import {BrandLogoService} from "./services/brand-logo.service";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatRadioModule} from "@angular/material/radio";


@NgModule({
  declarations: [
    AppComponent,
    AdvertListComponent,
    BrandListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    FlexLayoutModule,
    MatToolbarModule,
    MatCheckboxModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatDatepickerModule,
    FormsModule,
    MatRadioModule
  ],
  providers: [AdvertService ,HttpClient ,BrandLogoService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
