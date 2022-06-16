import { Component } from '@angular/core';
import { MyCalculator } from './my-calculator.service.ts.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  //styleUrls: ['./app.component.css'],
  providers : [MyCalculator]
})
export class AppComponent {
  title = 'Calculator';
  first=0;
  second=0;
  total=0;
  myserv: MyCalculator=null;
  constructor(serv:MyCalculator){
    this.myserv=serv;
  }
  sumOfNumbers():void{
  this.total=this.myserv.addNumbers(this.first,this.second);
  }
  }
  

