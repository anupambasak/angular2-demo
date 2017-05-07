import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Router } from '@angular/router';

import { SharedModule } from './shared/shared.module';

import { AppComponent } from './app.component';
import { MainChild1Component } from './main-child1/main-child1.component';
import { ChildRoute1Component } from './child-route1/child-route1.component';
import { ChildRoute2Component } from './child-route2/child-route2.component';

import { AppRoutingModule} from './app-routing/app-routing.module';
import { ChildRoute3Component } from './child-route3/child-route3.component';

@NgModule({
  declarations: [
    AppComponent,
    MainChild1Component,
    ChildRoute1Component,
    ChildRoute2Component,
    ChildRoute3Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(router: Router) {
    console.log('Routes:' + JSON.stringify(router.config, undefined, 2));
  }
}
