import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ItemComponentComponent } from './item-component/item-component.component';
import { ChildComponentComponent } from './child-component/child-component.component';
import { DiService } from './di.service';

@NgModule({
  declarations: [
    AppComponent,
    ItemComponentComponent,
    ChildComponentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [DiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
