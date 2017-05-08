import { Component, OnInit } from '@angular/core';
import * as Rx from 'rxjs/Rx';
import { Store } from '@ngrx/store';
import { INCREMENT, DECREMENT, RESET } from '../reducers/count1reducer';


interface AppState {
  counter: number;
}

@Component({
  selector: 'app-ngrx-demo',
  templateUrl: './ngrx-demo.component.html',
  styleUrls: ['./ngrx-demo.component.css']
})
export class NgrxDemoComponent implements OnInit {

  counter: Rx.Observable<number>;

  constructor(private store: Store<AppState>) {
    this.counter = store.select('counter1store');
  }

  ngOnInit() {
  }

  increment() {
    this.store.dispatch({ type: INCREMENT });
  }

  decrement() {
    this.store.dispatch({ type: DECREMENT });
  }

  reset() {
    this.store.dispatch({ type: RESET });
  }

  logConsole() {
    this.store.take(1).subscribe(val => console.log(val));
    this.store.withLatestFrom(val => console.log('withlatest', val));
  }

}
