import {Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';
import { error } from 'selenium-webdriver';

@Component({
  selector:'page-login',
  templateUrl:'login.html',
  styleUrls: ['login.scss']
})
export class LoginComponent implements OnInit {
  user: Observable<firebase.User>;
  items: AngularFireList<any[]>;
  error: any;
  constructor(public afAuth: AngularFireAuth,
              public af: AngularFireDatabase,
              private router: Router) {
    this.user = this.afAuth.authState;
  }

  ngOnInit(): void {

  }
  onSubmit(formData) {
    if (formData.valid) {
      console.log(formData.value);
      this.afAuth.auth.signInWithEmailAndPassword(
        formData.value.email,
        formData.value.password
      ).then(
        (success) => {
        console.log(success);
        this.router.navigate(['welcome-page']);
      }).catch(
        (err) => {
          console.log(err);
          this.error = err;
        }
      );
    }
  }

}
