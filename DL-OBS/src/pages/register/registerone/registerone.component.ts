import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NG_VALIDATORS,Validator,
  Validators,AbstractControl,ValidatorFn } from '@angular/forms';
import { User }  from './User';


@Component({
  selector: 'app-registerone',
  templateUrl: './registerone.component.html',
  styleUrls: ['./registerone.component.css'],
})
export class RegisteroneComponent implements OnInit {

  model = new User(null,'','','','',null,'');

  constructor(private router: Router) { }

  ngOnInit() {
  }
  onSubmit(formData) {
    if(formData.valid) {

        this.router.navigate(['/two']);

    }
  }
}
