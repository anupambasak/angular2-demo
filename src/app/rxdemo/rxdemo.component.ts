import { Component, OnInit } from '@angular/core';
import * as Rx from 'rxjs/Rx';

@Component({
  selector: 'app-rxdemo',
  templateUrl: './rxdemo.component.html',
  styleUrls: ['./rxdemo.component.css']
})
export class RxdemoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  demo() {
    /* const mySubject = new Rx.Subject();

     // add subscribers
     const subscriberOne = mySubject.subscribe(val => {
       console.log('***SUBSCRIBER ONE***', val);
     });

     const subscriberTwo = mySubject.subscribe(val => {
       console.log('***SUBSCRIBER TWO***', val);
     });

     mySubject.next('FIRST VALUE!');
     mySubject.next('SECOND VALUE!');*/

    // -----------------------------------------------------------------------------------------------

    /* class Dispatcher extends Rx.Subject<any> {
       dispatch(value: any): void {
         this.next(value);
       }
     }
     // create a dispatcher (just a Subject with wrapped next method)
     const dispatcher = new Dispatcher();

     // add subscribers
     const subscriberOne = dispatcher.subscribe(val => {
       console.log('***SUBSCRIBER ONE***', val);
     });

     const subscriberTwo = dispatcher.subscribe(val => {
       console.log('***SUBSCRIBER TWO***', val);
     });

     // publish values to observers of dispatcher
     dispatcher.dispatch('FIRST DISPATCHED VALUE!');
     dispatcher.dispatch('SECOND DISPATCHED VALUE!');*/

    // -----------------------------------------------------------------------------------------------

    /*
    Because our components will need to query current state, BehaviorSubject
    is a more natural fit for Store. BehaviorSubjects have all the functionality of Subject,
    but also allow for an initial value to be set, as well as outputting
    the last value received to all observers upon subscription.
    */
    /*class Store extends Rx.BehaviorSubject<any> {
      constructor(initialState: any) {
        super(initialState);
      }
    }

    const store = new Store('INITIAL VALUE!');

    // add a few subscribers
    const storeSubscriberOne = store.subscribe(val => {
      console.log('***STORE SUBSCRIBER ONE***', val);
    });
    const storeSubscriberTwo = store.subscribe(val => {
      console.log('***STORE SUBSCRIBER TWO***', val);
    });

    // For demonstration, manually publish values to store
    store.next('FIRST STORE VALUE!');

    // Add another subscriber after 'FIRST VALUE!' published
    // output: ***STORE SUBSCRIBER THREE*** FIRST STORE VALUE!
    const subscriberThree = store.subscribe(val => {
      console.log('***STORE SUBSCRIBER THREE***', val);
    });*/

    // -----------------------------------------------------------------------------------------------

    /*
All actions should pass through pipeline before newly calculated state is passed to store.
1.) Dispatched Action
2.) Pre-Middleware
3.) Reducers (return new state)
4.) Post-Middleware
5.) store.next(newState)
*/

    class Dispatcher extends Rx.Subject<any> {
      dispatch(value: any): void {
        this.next(value);
      }
    }

    class Store extends Rx.BehaviorSubject<any> {
      constructor(
        private dispatcher,
        initialState
      ) {
        super(initialState);
        /*
        all dispatched actions pass through action pipeline before new state is passed
        to store
        */
        this.dispatcher
          // pre-middleware
          // reducers
          // post-middleware
          .subscribe(state => super.next(state));

      }
      // delegate store.dispatch first through dispatched action pipeline
      dispatch(value) {
        this.dispatcher.dispatch(value);
      }
      // override store next to allow direct subscription to action streams by store
      next(value) {
        this.dispatcher.dispatch(value);
      }
    }

    const dispatcher = new Dispatcher();
    const store = new Store(dispatcher, 'INITIAL STATE');

    const subscriber = store.subscribe(val => console.log(`VALUE FROM STORE: ${val}`));
    /*
    All dispatched actions first flow through action pipeline, calculating new state which is
    then passed to store. To recap, our ideal behavior:
    dispatched action -> pre-middleware -> reducers -> post-middleware -> store.next(newState)
    */

    // both methods are same behind the scenes
    dispatcher.dispatch('DISPATCHED VALUE!');
    store.dispatch('ANOTHER DISPATCHED VALUE!');

    const actionStream$ = new Rx.Subject();
    /*
    Overriding store next method allows us to subscribe store directly to action streams,
    providing same behavior as manually calling store.dispatch or dispatcher.dispatch
    */
    actionStream$.subscribe(store);
    actionStream$.next('NEW ACTION!');
  }

  reducer() {
    // Redux-Style Reducer
    const person = (state = {}, action) => {
      switch (action.type) {
        case 'ADD_INFO':
          return Object.assign({}, state, action.payload);
        default:
          return state;
      }
    };

    /*const infoAction = { type: 'ADD_INFO', payload: { name: 'Brian', framework: 'Angular' } };
    const anotherPersonInfo = person(undefined, infoAction);
    console.log('***REDUX STYLE PERSON***: ', anotherPersonInfo);*/

    // Add another reducer
    const hoursWorked = (state = 0, action) => {
      switch (action.type) {
        case 'ADD_HOUR':
          return state + 1;
        case 'SUBTRACT_HOUR':
          return state - 1;
        default:
          return state;
      }
    };

    // Combine Reducers Refresher
    const myReducers = { person, hoursWorked };
    const combineReducers = reducers => (state = {}, action) => {
      return Object.keys(reducers).reduce((nextState, key) => {
        nextState[key] = reducers[key](state[key], action);
        return nextState;
      }, {});
    };
    const rootReducer = combineReducers(myReducers);
    const firstState = rootReducer(undefined, { type: 'ADD_INFO', payload: { name: 'Brian' } });
    const secondState = rootReducer({ hoursWorked: 10, person: { name: 'Joe' } }, { type: 'ADD_HOUR' });
    console.log('***FIRST STATE***:', JSON.stringify(firstState));
    console.log('***SECOND STATE***:', JSON.stringify(secondState));
  }

  combinelatest() {
    // timerOne emits first value at 1s, then once every 4s
    const timerOne = Rx.Observable.timer(1000, 4000);
    // timerTwo emits first value at 2s, then once every 4s
    const timerTwo = Rx.Observable.timer(2000, 4000);
    // timerThree emits first value at 3s, then once every 4s
    const timerThree = Rx.Observable.timer(3000, 4000);

    // when one timer emits, emit the latest values from each timer as an array
    const combined = Rx.Observable
      .combineLatest(
      timerOne,
      timerTwo,
      timerThree
      );

    const subscribe = combined.subscribe(latestValues => {
      // grab latest emitted values for timers one, two, and three
      const [timerValOne, timerValTwo, timerValThree] = latestValues;
      /*
        Example:
        timerOne first tick: 'Timer One Latest: 1, Timer Two Latest:0, Timer Three Latest: 0
        timerTwo first tick: 'Timer One Latest: 1, Timer Two Latest:1, Timer Three Latest: 0
        timerThree first tick: 'Timer One Latest: 1, Timer Two Latest:1, Timer Three Latest: 1
      */
      console.log(`Timer Latest Values: ${latestValues}`);
    });
  }

}
