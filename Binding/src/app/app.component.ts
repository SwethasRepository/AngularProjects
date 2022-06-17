import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title="Angular Binding"
  count:number=0;
  isDisabled=false;
  value="Binding";
  
  onClick()
  {
    console.log("Button Clicked")
    this.count= this.count+1;
  }
}
