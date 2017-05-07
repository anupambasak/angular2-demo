import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CounterDataService } from './counter-data.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers: [CounterDataService]
})
export class SharedModule { }
