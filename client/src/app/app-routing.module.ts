import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ParkPageComponent } from './park-page/park-page.component';
import { LoginComponent } from './login/login.component';
import { ExploreComponent } from './explore/explore.component';

const routes: Routes = [
  { path: 'parks', component: ParkPageComponent },
  { path: 'login', component: LoginComponent },
  { path: 'explore/:park', component: ExploreComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
