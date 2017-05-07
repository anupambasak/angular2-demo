import { Component, OnInit } from '@angular/core';
import { CounterDataService } from '../../shared/counter-data.service';

@Component({
  selector: 'app-lazy1',
  templateUrl: './lazy1.component.html',
  styleUrls: ['./lazy1.component.css']
})
export class Lazy1Component implements OnInit {

  cbs: CounterDataService;

  constructor(counterDataService: CounterDataService) {
    this.cbs = counterDataService;
  }

  ngOnInit() {
  }

}
