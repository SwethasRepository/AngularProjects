import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
 
import { AppComponent } from './app.component';
 
import {TempConverterPipe} from './temp-convertor.pipe';
 
@NgModule({
    declarations: [AppComponent,TempConverterPipe],
    imports: [BrowserModule,FormsModule],
    bootstrap: [AppComponent]
})
export class AppModule { }
 