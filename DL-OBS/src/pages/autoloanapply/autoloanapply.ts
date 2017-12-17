import {Component, OnInit, ViewChild} from '@angular/core';
import {LoanApply} from './LoanApply';
import {NgForm} from '@angular/forms';
import {Observable} from 'rxjs/Observable';
import {Router} from '@angular/router';

declare var jquery: any;
declare var $: any;

@Component({
  selector: 'autoloan-application',
  templateUrl: 'autoloanapply.html',
  styleUrls: ['autoloanapply.scss']
})
export class AutoLoanApplyComponent implements OnInit {
  @ViewChild('formData') formData: NgForm;
  @ViewChild('formDataTwo') formDataTwo: NgForm;
  @ViewChild('formDataThree') formDataThree: NgForm;
  @ViewChild('formDataFour') formDataFour: NgForm;
  @ViewChild('formDataFive') formDataFive: NgForm;
  step = 1;
  userAgreement = false;
  employmentStatus = [
    {value: 1, status: 'Full-time'},
    {value: 2, status: 'Part-time'},
    {value: 3, status: 'Self-employed'},
    {value: 4, status: 'Others'},
  ];
  terms = [
    {value: 1, term: '48'},
    {value: 2, term: '60'},
    {value: 3, term: '72'},
  ];
  years = [
    {value: 1, year: 'Less than 1 year'},
    {value: 2, year: 'Between 1 year and 2 years'},
    {value: 3, year: 'Between 2 years and 3 years'},
    {value: 4, year: 'Between 3 years and 4 years'},
    {value: 4, year: 'Between 4 years and 5 years'},
  ];
  makes = [
    {value: 1, make: 'Acura'},
    {value: 2, make: 'Audi'},
    {value: 3, make: 'BMW'},
    {value: 4, make: 'Ford'},
  ];
  modelOfCars = [
    {value: 1, modelOfCar: 'ILX'},
    {value: 2, modelOfCar: 'MDX'},
    {value: 3, modelOfCar: 'NSX'},
    {value: 4, modelOfCar: 'RDX'},
  ];


  model = new LoanApply('', '', '', null, '', '', '', null, null, null, '', null, '', null, null, null, null, null, null, null);

  user;
  items;
  error: any;

  constructor(private router: Router) {
  }

  ngOnInit(): void {
    $(document).ready(function () {
      $('.modal').modal({dismissible: false});
    });
  }

  nextPage() {
    console.log('Going to next page');
    console.log('step: ' + this.step);
    this.step = this.step + 1;
    console.log('Model');
    console.log(this.model);
  }

  previousPage() {
    console.log('Going to previous page');
    console.log('step: ' + this.step);
    this.step = this.step - 1;
  }

  onChange(f) {
    console.log(f);
  }

  submit() {
    $(document).ready(function () {
      $('#modal-loanapply').modal('open');
    });
  }
}
