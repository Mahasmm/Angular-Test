import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lazzy-comp',
  templateUrl: './lazzy-comp.component.html',
  styleUrls: ['./lazzy-comp.component.css']
})
export class LazzyCompComponent implements OnInit {

  constructor() {
    console.log("Lazzy load");
    
   }

  ngOnInit(): void {
  }

  onSubmit(val:any)
  {
    console.log(val);
    
  }

}
