import { Component, HostBinding, OnInit } from '@angular/core';
import { DiService } from './di.service';
@Component({
  selector: 'app-root',
  templateUrl:'./app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[DiService]
})
export class AppComponent implements OnInit {
  title = 'Decorators';
  message="Iam Parent Component message passed to child";
  @HostBinding('style.border') border:string="";
  ngOnInit()
  {
    this.border="5px solid blue";
  }

  items=["clothes","utensils","eatables"];

  addItem(newItem:string)
  {
    this.items.push(newItem);
    // console.log(newItem);
    this.display_items();
  }

  display_items()
  {
  for(var item of this.items)
  {
    console.log(item);
  }
  }


}  
