import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './user/login/login.component';

const routes: Routes = [
  {
    path:"header",
    component:HeaderComponent
  },
  {
    path:"login",
    component:LoginComponent
  },
  {
    path:'nayan',
    loadChildren:()=>import('./nayan/nayan.module')
    .then(mod=>mod.NayanModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
