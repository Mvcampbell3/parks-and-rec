import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ParkPageComponent } from './park-page/park-page.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path: 'parks', component: ParkPageComponent },
  {path: 'login', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
