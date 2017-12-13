import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {Router} from "@angular/router";
import {Observable} from "rxjs/Observable";

@Component({
  selector: 'dl-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HeaderComponent implements OnInit {

  user: any;

  constructor(private router: Router) {
  }

  ngOnInit() {

  }

  logout() {
    console.log(this.user);
    // this.afAuth.auth.signOut().then((success) => {
    //   console.log("Success");
    //   console.log(success);
    //   localStorage.removeItem('user');
    //   window.location.replace('/');
    //   // this.router.navigateByUrl('', { skipLocationChange: true });
    // }).catch((error) => {
    //   console.log("Error");
    //   console.log(error);
    // });
  }
  hasUser(): boolean {
    if (localStorage.getItem('user') !== null) {
      return true;
    }
    return false;
  }

}
