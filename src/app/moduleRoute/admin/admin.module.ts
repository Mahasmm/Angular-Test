import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { Test1Component } from './test1/test1.component';
import { Test2Component } from './test2/test2.component';

@NgModule({
  declarations: [Test2Component,Test1Component],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
