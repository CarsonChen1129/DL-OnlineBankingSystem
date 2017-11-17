import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs/Observable";
import {AngularFireDatabase, AngularFireList} from "angularfire2/database";
import {AngularFireAuth} from "angularfire2/auth";
import {Router} from "@angular/router";
import * as firebase from "firebase";

@Component({
    selector: 'page-welcome',
    templateUrl: 'welcome-page.html',
    styleUrls: ['welcome-page.scss']
})
export class WelcomePageComponent implements OnInit {

  products = [
    {title: 'Let us hep you get on the road', description: 'Take a few minutes to apply online to get your loan approved before you go to the dealer. You are just a few steps away from your new car.', img: 'assets/images/auto-loan.jpg'},
    {title: 'Making a home change?', description: 'Start a relationship with a Home Lending Advisor to personalize a plan that\'s right for you.', img: 'assets/images/mortgage2.jpg'},
    {title: 'Tap into your home\'s equity', description: 'Help finance what\'s important with a home equity line of credit.', img: 'assets/images/home-equity.jpg'},
    {title: 'Devonshire Mobile Banking', description: 'The Latest mobile banking app built around you. It\'s simple, rewarding, and secure.', img: 'assets/images/dl-mobile.png'}
  ];

  user;
  items: AngularFireList<any[]>;
  error: any;
  constructor(public afAuth: AngularFireAuth,
              public af: AngularFireDatabase,
              private router: Router) {
  }

  ngOnInit(): void {
    if (localStorage.getItem('user') != null) {
      this.user = JSON.parse(localStorage.getItem('user'));
    }
  }

  onSubmit(formData) {
    console.log(formData);
    if (formData.valid) {
      console.log(formData.value);
      this.afAuth.auth.signInWithEmailAndPassword(
        formData.value.email,
        formData.value.password
      ).then(
        (success) => {
          console.log(success);
          localStorage.setItem('user', JSON.stringify({name: success.displayName, email: success.email, uid: success.uid}));
          this.router.navigate(['dashboard']);
        }).catch(
        (err) => {
          console.log(err);
          this.error = err;
        }
      );
    }
  }
}
