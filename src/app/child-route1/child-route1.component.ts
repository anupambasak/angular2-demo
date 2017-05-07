import { Component, OnInit } from '@angular/core';
import { CounterDataService } from '../shared/counter-data.service';

@Component({
  selector: 'app-child-route1',
  templateUrl: './child-route1.component.html',
  styleUrls: ['./child-route1.component.css']
})
export class ChildRoute1Component implements OnInit {

  constructor(private cds: CounterDataService) { }

  ngOnInit() {
  }

  buttonClick() {
    this.cds.increment();
  }

  getCounterData(): number {
    return this.cds.counter;
  }

}
