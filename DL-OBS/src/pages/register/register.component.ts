
import {Component, OnInit, ViewChild} from "@angular/core";
import {User} from "./User";
import {NgForm} from "@angular/forms";

@Component({
  selector:'page-register',
  templateUrl: 'register.component.html',
  styleUrls: ['register.component.scss']
})
export class RegisterComponent implements OnInit {
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

  model = new User(null, '', '', '', '', null, '', null, '', null, '', null, '');

  constructor(

  ){}

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

  userAgreementCheck() {
    this.userAgreement = !this.userAgreement;
    console.log(this.userAgreement);
  }

  onChange(f) {
    console.log(f);
  }

  onSubmit() {

  }
}
