import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here

@Component({
  selector: 'app-tf-pay-others',
  templateUrl: './tf-pay-others.component.html',
  styleUrls: ['./tf-pay-others.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class TfPayOthersComponent implements OnInit {
  note:string = '';
  hide:boolean = false;
  constructor() { }

  ngOnInit() {
  }
  hideform() {
    if (this.hide) {
      this.hide = false;
      
    } else {
      this.hide = true;
    }
  }

}
