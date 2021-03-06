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
import {FilterTableComponent} from "./components/filter-table/filter-table.component";
import {MatSliderModule} from "@angular/material/slider";
import {AdvertDetailPageComponent } from './components/advert-detail-page/advert-detail-page.component';
import { RouterModule,Routes} from "@angular/router";
import { SearchComponent } from './components/search/search.component';
import { RegisterFormComponent } from './components/register-form/register-form.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import {MatTabsModule} from "@angular/material/tabs";
import {MatInputModule} from "@angular/material/input";
import {MatDialogModule} from "@angular/material/dialog";
import {MatGridListModule} from "@angular/material/grid-list";
import {MatSelectModule} from "@angular/material/select";
import {MatNativeDateModule, MatOptionModule} from "@angular/material/core";
import {AngularFireModule} from "@angular/fire/compat";
import {AngularFireAuthModule} from "@angular/fire/compat/auth";
import {environment} from "../environments/environment";
import {AuthServiceService} from "./services/auth-service.service";
import { CreateAdvertComponent } from './components/create-advert/create-advert.component';
import {AuthGuard} from "./guards/auth.guard";
import { FavouriteAdvertsComponent } from './components/favourite-adverts/favourite-adverts.component';


const routes:Routes =[
  {path:'adverts/:id',component:AdvertDetailPageComponent},
  {path:'search/:keyword',component:AdvertListComponent},
  {path:'brands/:brand',component:AdvertListComponent},
  {path:'user-register',component:RegisterFormComponent},
  {path:'user-login',component:LoginFormComponent},
  {path:'adverts',component:AdvertListComponent},
  {path:'create-advert',component:CreateAdvertComponent,canActivate:[AuthGuard]},
  {path:'favourites',component:FavouriteAdvertsComponent,canActivate:[AuthGuard]},
  {path:'',redirectTo:'adverts',pathMatch:'full'},
  {path:'**',redirectTo:'adverts',pathMatch:'full'}
]

@NgModule({
  declarations: [
    AppComponent,
    AdvertListComponent,
    BrandListComponent,
    FilterTableComponent,
    AdvertDetailPageComponent,
    SearchComponent,
    RegisterFormComponent,
    LoginFormComponent,
    CreateAdvertComponent,
    FavouriteAdvertsComponent,
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
    MatRadioModule,
    MatSliderModule,
    RouterModule.forRoot(routes),
    MatTabsModule,
    MatInputModule,
    MatDialogModule,
    MatGridListModule,
    MatSelectModule,
    MatOptionModule,
    MatDatepickerModule,
    MatButtonModule,
    MatFormFieldModule,
    MatNativeDateModule,

    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule

  ],
  providers: [AdvertService ,HttpClient ,BrandLogoService,AuthServiceService],
  bootstrap: [AppComponent],
})
export class AppModule {
}
