import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyCalculator {
  constructor() { }
addNumbers(first:number,second:number):number{
  return(first+second);
}
}
