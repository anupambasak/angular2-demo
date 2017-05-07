import { Component, OnInit } from '@angular/core';
import { CounterDataService } from '../shared/counter-data.service';

@Component({
  selector: 'app-child-route2',
  templateUrl: './child-route2.component.html',
  styleUrls: ['./child-route2.component.css']
})
export class ChildRoute2Component implements OnInit {

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
