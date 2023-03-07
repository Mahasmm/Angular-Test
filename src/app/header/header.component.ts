import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Output() childTop:EventEmitter<any> = new EventEmitter();
  constructor(private userHttp:UsersService) { 
    this.userHttp.getHttp().subscribe(data=>{
      console.log(data);
      
  })

  console.log("Header load");

  
  
  }


  ngOnInit(): void {
    let data = {
      name: 'baby',
      age: 22,
    };
    this.childTop.emit(data);

    }
    
    fun(){
      let name = "Mahas";
      this.childTop.emit(name);
    }
  }


