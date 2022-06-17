import { Component } from '@angular/core';
@Component({
  selector: 'App-Sel',  
  template:`
  <h2>{{title}}</h2>      
  <div [ngSwitch]="input">      
  <p style='color:blue'  *ngSwitchCase="1">You have selected M S Dhoni</p>      
  <p style='color:blue'  *ngSwitchCase="2">You have selected Sachin Tendulkar</p>      
  <p style='color:blue'  *ngSwitchCase="3">You have selected Satyaprakash Samantaray</p>     
  <p style='color:red'  *ngSwitchDefault>Sorry! Invalid selection....</p>      
  </div>`
})    

export class AppComponent {
  title="Structural Directive Example";
  input: number =2;
  // employees: any[] = [    
  //   {    
  //       code: '1001', name: 'Satya', gender: 'Male',    
  //       annualSalary: 5500, dateOfBirth: '25/6/1988'    
  //   },    
  //   {    
  //       code: '1002', name: 'Mohit', gender: 'Male',    
  //       annualSalary: 5700.95, dateOfBirth: '9/6/1982'    
  //   },    
  //   {    
  //       code: '1003', name: 'Rohit', gender: 'Male',    
  //       annualSalary: 5900, dateOfBirth: '12/8/1979'    
  //   },    
  //   {    
  //       code: '1004', name: 'Satyaprakash Samantaray', gender: 'Female',    
  //       annualSalary: 6500.826, dateOfBirth: '14/10/1980'    
  //   },]    

}    
