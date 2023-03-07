import { Component, ViewContainerRef, ComponentFactoryResolver } from '@angular/core';
import { UsersService } from './users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {

  myname = "";
  constructor(private val:UsersService, 
    private vcr:ViewContainerRef)
  {
    this.myname = this.val.getData();
  }

  async LoadLazzy()
  {
    this.vcr.clear();
    const {LazzyCompComponent} = await import('./lazzy-comp/lazzy-comp.component');
    this.vcr.createComponent(LazzyCompComponent);
  }

  title = 'testApp';
  value_a: string = '';
  list: Array<string> = new Array<string>();

  testFun = () => {
    this.list.push(this.value_a);
    this.value_a = '';
  };

  data = {
    name: 'mahas',
    age: 25,
  };

  name = "";
  childToparent(dt:any){
    console.log(dt);
    this.name = dt;
    
  }

  str = "adfsd"
  today = Date.now();
  money = 100;


}
