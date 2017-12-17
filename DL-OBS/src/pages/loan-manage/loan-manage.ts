import {Component, OnInit} from '@angular/core';
import {LocalStorage} from '../../providers/localstorage.service';

@Component({
  selector: 'loan-manage',
  templateUrl: 'loan-manage.html',
  styleUrls: ['loan-manage.scss']
})

export class LoanManageComponent implements OnInit {

  user: any;

  constructor(private storage: LocalStorage) {
  }

  ngOnInit(): void {
    this.storage.getObjectObservable('user').subscribe((data) => {
      console.log('User ' + data);
      if (data) {
        this.user = data;
      }
    }, (error) => {
      console.log(error);
    });
  }
}
