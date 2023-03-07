import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestComponent } from './test/test.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { StyleTestDirective } from '../style-test.directive';
import { StyleTestsDirective } from './style-tests.directive';
import { Test1Component } from './test1/test1.component';
import {ReactiveFormsModule} from '@angular/forms';

console.log("user Module");

@NgModule({
  declarations: [TestComponent, LoginComponent, StyleTestsDirective],
  imports: [
    CommonModule,
    FormsModule,
    NgbModule,
    BrowserAnimationsModule,
    MatButtonModule,
    ReactiveFormsModule
    
  ],
  exports: [TestComponent, LoginComponent],
})
export class UserModule {}
