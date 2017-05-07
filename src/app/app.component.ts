import { Component } from '@angular/core';
import { CounterDataService } from './shared/counter-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  cds: CounterDataService;

  constructor(counterDataService: CounterDataService) {
    this.cds = counterDataService;
  }

  buttonClick() {
    this.cds.increment();
  }

}
