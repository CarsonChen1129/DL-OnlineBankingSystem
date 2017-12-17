import {Component, EventEmitter, OnInit} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {ActivatedRoute, Router} from '@angular/router';
import {AuthenticationService} from '../../providers/authentication.service';
import {LocalStorage} from '../../providers/localstorage.service';

declare var Materialize: any;

@Component({
  selector: 'page-welcome',
  templateUrl: 'welcome-page.html',
  styleUrls: ['welcome-page.scss']
})
export class WelcomePageComponent implements OnInit {

  products = [
    {
      title: 'Let us help you get on the road',
      description: 'Take a few minutes to apply online to get your loan approved before you go to the dealer. You are just a few steps away from your new car.',
      img: 'assets/images/auto-loan.jpg'
    },
    {
      title: 'Making a home change?',
      description: 'Start a relationship with a Home Lending Advisor to personalize a plan that\'s right for you.',
      img: 'assets/images/mortgage2.jpg'
    },
    {
      title: 'Tap into your home\'s equity',
      description: 'Help finance what\'s important with a home equity line of credit.',
      img: 'assets/images/home-equity.jpg'
    },
    {
      title: 'Devonshire Mobile Banking',
      description: 'The Latest mobile banking app built around you. It\'s simple, rewarding, and secure.',
      img: 'assets/images/dl-mobile.png'
    }
  ];

  user;

  error: any;

  constructor(private auth: AuthenticationService,
              private storage: LocalStorage,
              private router: Router,
              private route: ActivatedRoute,) {
  }

  ngOnInit(): void {
    this.storage.getObjectObservable('user').subscribe((data) => {
      if (data) {
        this.user = data;
      }
    }, (error) => {
      console.log(error);
    });
  }

  notAvailable(): void {
    Materialize.toast('Please visit a branch to reset your password', 4000);
  }

  onSubmit(formData) {
    console.log(formData);
    if (formData.valid) {
      console.log(formData.value);
      this.auth.login(formData).subscribe((data) => {
        console.log(data);
        this.storage.setObject('user', data);
        this.router.navigate(['dashboard']);
      }, (error) => {
        console.log(error);
        if (error.error.message) {
          Materialize.toast(error.error.message, 3000);
        } else {
          Materialize.toast('Login not successful. Please check your internet access.', 3000);
        }
      });
    }
  }
}
