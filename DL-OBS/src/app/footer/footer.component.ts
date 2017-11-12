import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {trigger,state,style,animate,transition} from '@angular/animations';

@Component({
  selector: 'footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  // made a new animations here
  animations: [
    trigger('state', [
      state('inactive', style({
        backgroundColor:'#b79344',
        transform: 'scale(1)'
      })),
      state('active',   style({
        backgroundColor:'#f4bd0c',
        transform: 'scale(1.05)'
      })),
      transition('inactive => active', animate('100ms ease-in')),
      transition('active => inactive', animate('100ms ease-out'))
    ])
  ]
})
export class FooterComponent implements OnInit {

  state:string = 'inactive';
  constructor() { }

  ngOnInit() {
  }
  toggleState() {
    if (this.state == 'inactive') {
      this.state = 'active';
    } else {
      this.state = 'inactive';
    }
  }
}
