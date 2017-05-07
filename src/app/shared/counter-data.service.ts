import { Injectable } from '@angular/core';

@Injectable()
export class CounterDataService {

  counter: number;

  constructor() {
    this.counter = 0;
  }

  increment() {
    this.counter++;
  }

}
