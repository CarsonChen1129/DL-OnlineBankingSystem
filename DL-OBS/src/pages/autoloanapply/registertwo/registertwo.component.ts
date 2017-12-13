import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NG_VALIDATORS,Validator,
  Validators,AbstractControl,ValidatorFn } from '@angular/forms';

@Component({
  selector: 'app-registertwo',
  templateUrl: './registertwo.component.html',
  styleUrls: ['./registertwo.component.css'],
})
export class RegistertwoComponent implements OnInit {

   constructor(private router: Router) { }

  ngOnInit() {
  }
  onSubmit(formDataTwo) {
    if(formDataTwo.valid) {
      
        this.router.navigate(['/three']);
      
    }
  }

}
