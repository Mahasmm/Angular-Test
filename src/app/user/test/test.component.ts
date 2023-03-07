import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css'],
})
export class TestComponent implements OnInit {
  constructor() {
    console.log("loading header commponent");
  }

  @Input() data: any;

  ngOnInit(): void {}

  fun(name: string) {
    console.log(name);
  }

  value_fun1 = '';
  fun1(val: KeyboardEvent) {
    this.value_fun1 = (val.target as HTMLInputElement).value;
  }

  fun2(val: string) {
    this.value_fun1 = val;
  }

  en = false;
  name = 'mahas';
  dis() {
    this.en = false;
  }
}
