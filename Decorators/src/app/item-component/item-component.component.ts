import { Component, OnInit,Input,Output,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-item-component',
  templateUrl: './item-component.component.html',
  styleUrls: ['./item-component.component.css']
})
export class ItemComponentComponent implements OnInit {

  @Input() myinputMsg:any;  
  @Output() myOutputMsg:EventEmitter<string>=new EventEmitter();
  output:string="Iam Child Component"
  
ngOnInit() {  
   console.log(this.myinputMsg);  
   }  

   sendValues()
   {
     this.myOutputMsg.emit(this.output);
   }
     constructor() {
     }

}  


