import {Component, OnInit} from '@angular/core';
import {LocalStorage} from '../../providers/localstorage.service';
declare var jquery:any;
declare var $ :any;

@Component({
    selector:'page-dashboard',
    templateUrl:'dashboard.html',
    styleUrls: ['dashboard.scss']
})

export class DashboardComponent implements OnInit {

    user;

    constructor(private storage: LocalStorage) {
    }

    ngOnInit(): void {
      $(document).ready(function(){
        $('.modal').modal({dismissible: false});
      });
      this.storage.getObjectObservable("user").subscribe((data)=>{
        console.log(data);
        if(data != null){
          this.user = data;
        } else {
          // window.location.replace('');
          $(document).ready(function(){
            // the "href" attribute of the modal trigger must specify the modal ID that wants to be triggered
            $('#modal-login').modal('open');
            // $('#modal-login').css('display', 'inline-block');
          });
        }
      }, (error)=>{
        console.log(error);
      });
    }
}
