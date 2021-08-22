import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AdvertListComponent } from './components/advert-list/advert-list.component';

@NgModule({
  declarations: [
    AppComponent,
    AdvertListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
