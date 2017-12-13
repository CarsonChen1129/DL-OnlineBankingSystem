import {Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import {AuthenticationService} from "../../providers/authentication.service";

@Component({
  selector:'page-login',
  templateUrl:'login.html',
  styleUrls: ['login.scss']
})
export class LoginComponent implements OnInit {
  // user: Observable<firebase.User>;
  // items: AngularFireList<any[]>;
  error: any;
  constructor(
    private auth: AuthenticationService,
    private router: Router) {
  }

  ngOnInit(): void {

  }

  onSubmit(formData) {
    if (formData.valid) {
      console.log(formData.value);

      // this.auth.login(formData)
      // this.auth.checkRegistrationStatus(formData).subscribe((data)=>{
      //   console.log("data:");
      //   console.log(data);
      // }, (error)=>{
      //   console.log("error:");
      //   console.log(error);
      // });
      this.auth.login(formData).subscribe((data)=>{
        console.log("data:");
        console.log(data);
      }, (error)=>{
        console.log("error:");
        console.log(error);
      })
      // this.afAuth.auth.signInWithEmailAndPassword(
      //   formData.value.email,
      //   formData.value.password
      // ).then(
      //   (success) => {
      //   console.log(success);
      //   this.router.navigate(['welcome-page']);
      // }).catch(
      //   (err) => {
      //     console.log(err);
      //     this.error = err;
      //   }
      // );
    }
  }

}
