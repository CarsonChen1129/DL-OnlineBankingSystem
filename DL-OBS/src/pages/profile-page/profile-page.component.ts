import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {Router} from '@angular/router';


@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ProfilePageComponent implements OnInit {

  constructor(private router: Router) {
  }

  ngOnInit() {
  }

}
