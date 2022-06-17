import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './display.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Pipes';
  str1="lowercase";
  str2="UPPERCASE";
  today:Date=new Date();
  str3:string="Welcome to Pipes in Angular"
  num:number=23456.67897;
  per=.7414;
  amt=30000;
}

