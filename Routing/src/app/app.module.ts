import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule,Routes } from '@angular/router';
import {AppComponent} from './app.component';
import {Appproduct} from './product.component';
import {AppInventory} from './Inventory.component';
import {PageNotFoundComponent} from  './NotFoundComponent';
import { AppRoutingModule } from './app-routing.module';
const appRoutes:Routes=[
  {path:'Product',component :Appproduct},
  {path:'Inventory',component:AppInventory},
//  {path:' ',component:Appproduct},
  {path:'**',component:PageNotFoundComponent}];

@NgModule({
   declarations: [
    AppComponent,Appproduct,AppInventory,PageNotFoundComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
