import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NayanRoutingModule } from './nayan-routing.module';
import { Test1Component } from './test1/test1.component';

console.log("nayan Module");

@NgModule({
  declarations: [
    Test1Component
  ],
  imports: [
    CommonModule,
    NayanRoutingModule
  ]
})
export class NayanModule { }
