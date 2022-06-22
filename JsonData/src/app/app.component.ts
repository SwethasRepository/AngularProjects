import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
 selector: 'app-root',
 templateUrl: './app.component.html',
 styleUrls: ['./app.component.css']
})
export class AppComponent {
 title = 'test-app';
 var1;
 constructor(public httpClient: HttpClient){}
 giveMeData(){
//  this.httpClient.get('https://jsonplaceholder.typicode.com/users').subscribe((resp)=>{
 this.httpClient.get('./assets/sample.json').subscribe((resp)=>{
this.var1 = resp;
 });
 }
}