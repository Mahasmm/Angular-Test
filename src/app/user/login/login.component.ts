import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/users.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  name = "";
  constructor(private val:UsersService) {
    this.name = this.val.getData();
  }

  ngOnInit(): void {}

  fun(val: any) {
    console.log(val);
  }
}
