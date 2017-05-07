import { Component, OnInit } from '@angular/core';
import { CounterDataService } from '../shared/counter-data.service';

@Component({
  selector: 'app-main-child1',
  templateUrl: './main-child1.component.html',
  styleUrls: ['./main-child1.component.css']
})
export class MainChild1Component implements OnInit {

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
