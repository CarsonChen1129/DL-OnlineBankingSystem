
import {Component, OnInit, ViewChild} from "@angular/core";
import {LoanApply} from "./LoanApply";
import {NgForm} from "@angular/forms";
import {Observable} from "rxjs/Observable";
import {AngularFireDatabase, AngularFireList} from "angularfire2/database";
import {AngularFireAuth} from "angularfire2/auth";
import * as firebase from "firebase";
import {Router} from "@angular/router";
import {AngularFirestore} from "angularfire2/firestore";

@Component({
  selector:'autoloan-application',
  templateUrl: 'autoloanapply.html',
  styleUrls: ['autoloanapply.scss']
})
export class AutoLoanApplyComponent implements OnInit {
@ViewChild('formData') formData: NgForm;
@ViewChild('formDataTwo') formDataTwo: NgForm;
@ViewChild('formDataThree') formDataThree : NgForm;
@ViewChild('formDataFour') formDataFour : NgForm;
@ViewChild('formDataFive') formDataFive : NgForm;
  step = 1;
  userAgreement = false;
  employmentStatus=[
    {value: 1, status: 'Full-time'},
    {value: 2, status: 'Part-time'},
    {value: 3, status: 'Self-employed'},
    {value: 4, status: 'Others'},
  ];
  terms=[
    {value: 1, term: '48'},
    {value: 2, term: '60'},
    {value: 3, term: '72'},
  ];
  years=[
    {value: 1, year: 'Less than 1 year'},
    {value: 2, year: 'Between 1 year and 2 years'},
    {value: 3, year: 'Between 2 years and 3 years'},
    {value: 4, year: 'Between 3 years and 4 years'},
    {value: 4, year: 'Between 4 years and 5 years'},
  ];
  makes=[
    {value: 1, make: 'Acura'},
    {value: 2, make: 'Audi'},
    {value: 3, make: 'BMW'},
    {value: 4, make: 'Ford'},
  ];
  modelOfCars=[
    {value: 1, modelOfCar: 'ILX'},
    {value: 2, modelOfCar: 'MDX'},
    {value: 3, modelOfCar: 'NSX'},
    {value: 4, modelOfCar: 'RDX'},
  ];



  model = new LoanApply('', '', '', null, '', '','', null, null,  null, '', null, '',null,null,null,null,null,null,null);

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

  nextPage() {
    console.log("Going to next page");
    console.log("step: "+this.step);
    this.step = this.step + 1;
    console.log("Model");
    console.log(this.model);
  }

  previousPage() {
    console.log("Going to previous page");
    console.log("step: "+this.step);
    this.step = this.step - 1;
  }

  onChange(f) {
    console.log(f);
  }

  submit() {
    if (this.model.email !== null && this.model.password !== null && this.model.name !== null) {
      this.afAuth.auth.createUserWithEmailAndPassword(this.model.email, this.model.password)
        .then((success) => {
        console.log(success);
          localStorage.setItem('user', JSON.stringify({name: this.model.name, email: this.model.email, uid: success.uid}));
          this.router.navigate(['dashboard']);
        // this.afAuth.authState.subscribe(authState => {
        //   authState.updateProfile({displayName: this.model.name, photoURL: ''})
        //     .then((res) => {
        //       console.log(res);
        //       console.log({name: res.displayName, email: res.email});
        //       /* TODO: res is undefined */
        //       localStorage.setItem('user', JSON.stringify({name: res.displayName, email: res.email, uid: res.uid}));
        //       this.router.navigate(['dashboard']);
        //   }).catch((error) => {
        //     console.log(error);
        //   });
        // });
        // this.afs.doc(`users/$(success.uid`).set({displayName: this.model.name, phoneNumber: this.model.phone})
        //   .then((res) => {
        //     console.log(res);
        //     // localStorage.setItem('user',)
        //     this.router.navigate(['dashboard']);
        // }).catch((error) => {
        //   console.log(error);
        // });
        }).catch((error) => {
        console.log(error);
        });
    }
  }
}
