import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ParkPageComponent } from './park-page/park-page.component';

const routes: Routes = [
  {path: 'parks', component: ParkPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
