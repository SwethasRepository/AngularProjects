import { Component } from '@angular/core';

@Component({
selector: 'app-root',
templateUrl: './app.component.html',
styleUrls: ['./app.component.css']
})

export class AppComponent {
   appTitle: string  = 'Bhimsen';
   appStatus: boolean = false;   // for if condition
   codes=[10,20,30,40];          // for for loop     
  
   color='blue';                 // for switch case
   colors=['red','blue','green'];
}
