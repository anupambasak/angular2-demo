import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes} from '@angular/router';
import { ChildRoute1Component } from '../child-route1/child-route1.component';
import { ChildRoute2Component } from '../child-route2/child-route2.component';
import { ChildRoute3Component } from '../child-route3/child-route3.component';
import { AppComponent } from '../app.component';


export const APP_ROUTES: Routes = [
  {path: 'route1', component: ChildRoute1Component},
  {path: 'route2', component: ChildRoute2Component},
  {path: 'route3/:id', component: ChildRoute3Component},
  {path: 'lazy1', loadChildren: '../lazy/lazy.module#LazyModule'}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(APP_ROUTES)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
