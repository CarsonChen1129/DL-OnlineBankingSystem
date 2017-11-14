import {Component, OnInit} from '@angular/core';
// import {AuthenticationService} from "../../providers/authentication.service";

@Component({
  selector:'page-login',
  templateUrl:'login.html'
})
export class LoginComponent implements OnInit {

  constructor(
  ){

  }

  ngOnInit():void {

  }

  // onSubmit(formData) {
  //   if (formData.valid) {
  //     this.auth.login(formData).subscribe()
  //   }
  // }
}
