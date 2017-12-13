
import {Component, OnInit, ViewChild} from "@angular/core";
import {User} from "./User";
import {NgForm} from "@angular/forms";
import {Observable} from "rxjs/Observable";
import {Router} from "@angular/router";
import {AuthenticationService} from "../../providers/authentication.service";

@Component({
  selector:'page-register',
  templateUrl: 'register.component.html',
  styleUrls: ['register.component.scss']
})
export class RegisterComponent implements OnInit {
  @ViewChild('formDataPre') formDataPre: NgForm;
@ViewChild('formData') formData: NgForm;
@ViewChild('formDataTwo') formDataTwo: NgForm;

  step = 1;
  userAgreement = false;
  securityOneQuestions = [
    {value: 1, question: 'In what city or town did your mother and father meet?'},
    {value: 2, question: 'What is the name of your favorite childhood friend?'},
    {value: 3, question: 'What is your favorite team?'},
    {value: 4, question: 'What was your favorite food as a child?'},
    {value: 5, question: 'Who is your childhood sports hero?'}
  ];
  securityTwoQuestions = [
    {value: 1, question: 'When is your youngest sibling’s birthday (MM/DD)?'},
    {value: 2, question: 'What was your favorite sport in high school?'},
    {value: 3, question: 'What is the middle name of your oldest child?'},
    {value: 4, question: 'What was the name of the hospital where you were born?'},
    {value: 5, question: 'What school did you attend for sixth grade?'}
  ];
  securityThreeQuestions = [
    {value: 1, question: 'What is your grand father’s first name?'},
    {value: 2, question: 'In what town was your first job?'},
    {value: 3, question: 'What is the first name of your best friend in high school?'},
    {value: 4, question: 'What is your favorite color?'},
    {value: 5, question: 'Which is your favorite web browser?'}
  ];

  items;
  error: any;

  user = {};
  email= '';
  pin = '';

  constructor(private auth: AuthenticationService,
              private router: Router) {
  }

  ngOnInit(): void {

  }

  checkRegistrationStatus() {
    console.log(this.email);
    console.log(this.pin);
    if (this.email !== null && this.email.length > 0 && this.pin !== null && this.pin.length > 0) {
      this.auth.checkRegistrationStatus(this.email, this.pin).subscribe((data)=>{
        console.log(data);
        if (data) {
          this.user = data;
          this.nextPage();
        }
      }, (error) => {
        console.log(error);
        this.error = error.error.message;
      });
    } else {
      this.error = "Please enter the following information";
    }
  }

  nextPage() {
    console.log("Going to next page");
    console.log("step: "+this.step);
    this.step = this.step + 1;
    this.error = "";
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
    if (this.email !== null && this.user['password'] !== null) {
      this.user['email'] = this.email;
      this.user['pin'] = this.pin;
      console.log(this.user);
      this.auth.register(this.user).subscribe((data) => {
        console.log(data);
        this.router.navigate(['']);
      }, (error) => {
        console.log(error);
      });
      // this.afAuth.auth.createUserWithEmailAndPassword(this.model.email, this.model.password)
      //   .then((success) => {
      //   console.log(success);
      //     localStorage.setItem('user', JSON.stringify({name: this.model.name, email: this.model.email, uid: success.uid}));
      //     this.router.navigate(['dashboard']);
      //   // this.afAuth.authState.subscribe(authState => {
      //   //   authState.updateProfile({displayName: this.model.name, photoURL: ''})
      //   //     .then((res) => {
      //   //       console.log(res);
      //   //       console.log({name: res.displayName, email: res.email});
      //   //       /* TODO: res is undefined */
      //   //       localStorage.setItem('user', JSON.stringify({name: res.displayName, email: res.email, uid: res.uid}));
      //   //       this.router.navigate(['dashboard']);
      //   //   }).catch((error) => {
      //   //     console.log(error);
      //   //   });
      //   // });
      //   // this.afs.doc(`users/$(success.uid`).set({displayName: this.model.name, phoneNumber: this.model.phone})
      //   //   .then((res) => {
      //   //     console.log(res);
      //   //     // localStorage.setItem('user',)
      //   //     this.router.navigate(['dashboard']);
      //   // }).catch((error) => {
      //   //   console.log(error);
      //   // });
      //   }).catch((error) => {
      //   console.log(error);
      //   });
    }
  }
}
