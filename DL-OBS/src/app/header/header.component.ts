import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {AngularFireAuth} from "angularfire2/auth";
import {Router} from "@angular/router";
import {Observable} from "rxjs/Observable";
import {default as firebase, User} from "firebase";
import {AngularFireDatabase} from "angularfire2/database";

@Component({
  selector: 'dl-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HeaderComponent implements OnInit {

  user: Observable<firebase.User>;

  constructor(public afAuth: AngularFireAuth,
              public af: AngularFireDatabase,
              private router: Router) {
    this.user = afAuth.authState;
    console.log(this.user);
  }

  ngOnInit() {

  }

  logout() {
    console.log(this.user);
    this.afAuth.auth.signOut().then((success) => {
      console.log("Success");
      console.log(success);
      localStorage.removeItem('user');
      this.router.navigateByUrl('/', { skipLocationChange: true }).then(()=>{
        window.location.reload();
      });
    }).catch((error) => {
      console.log("Error");
      console.log(error);
    });
  }
  hasUser(): boolean {
    if (localStorage.getItem('user') !== null) {
      return true;
    }
    return false;
  }

}
