import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes} from '@angular/router';
import { Lazy1Component } from './lazy1/lazy1.component';


export const LAZY_ROUTES: Routes = [
  {path: '', component: Lazy1Component}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(LAZY_ROUTES)
  ],
  exports: [ RouterModule ],
  declarations: [Lazy1Component]
})
export class LazyModule { }
