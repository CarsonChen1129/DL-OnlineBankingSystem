import {Component, OnInit} from '@angular/core';

@Component({
    selector:'page-dashboard',
    templateUrl:'dashboard.html',
    styleUrls: ['dashboard.scss']
})

export class DashboardComponent implements OnInit {

    user;

    constructor() {
    }

    ngOnInit():void {
      if (localStorage.getItem('user') != null) {
        this.user = JSON.parse(localStorage.getItem('user'));
      }
    }
}
