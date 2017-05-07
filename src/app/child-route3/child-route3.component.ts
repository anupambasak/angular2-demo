import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-child-route3',
  templateUrl: './child-route3.component.html',
  styleUrls: ['./child-route3.component.css']
})
export class ChildRoute3Component implements OnInit {

  myid: any;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe( tt => {
      this.myid = +tt['id'];
    } );
  }

}
