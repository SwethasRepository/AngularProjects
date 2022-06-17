import { Component, OnInit,Input, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child-component',
  templateUrl: './child-component.component.html',
  styleUrls: ['./child-component.component.css']
})
export class ChildComponentComponent implements OnInit {
  @Input() msg="";
  @Output() event=new EventEmitter<string>();
  output="My Output Message";

  constructor() { }

  display(value:string)
  {
    this.event.emit(value);
    console.log(value)
  }

  ngOnInit(): void {
  }

}
