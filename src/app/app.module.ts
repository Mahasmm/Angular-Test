import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './user/test/test.component';
import { LoginComponent } from './user/login/login.component';
import { UserModule } from './user/user.module';
import { HeaderComponent } from './header/header.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StyleTestDirective } from './style-test.directive';
import {HttpClientModule} from '@angular/common/http';
import { AdminModule } from './moduleRoute/admin/admin.module';
import { CustomerModule } from './customer/customer.module';
import { LazzyCompComponent } from './lazzy-comp/lazzy-comp.component';
import { Test1Component } from './user/test1/test1.component';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [AppComponent, HeaderComponent, StyleTestDirective, LazzyCompComponent,Test1Component],
  imports: [BrowserModule,ReactiveFormsModule,CustomerModule,AdminModule, AppRoutingModule, FormsModule, NgbModule, BrowserAnimationsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
