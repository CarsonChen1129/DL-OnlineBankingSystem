import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {Router} from "@angular/router";
import {Observable} from "rxjs/Observable";
import {AuthenticationService} from "../../providers/authentication.service";
import {LocalStorage} from "../../providers/localstorage.service";
declare var jquery:any;
declare var $ :any;

@Component({
  selector: 'dl-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HeaderComponent implements OnInit {

  user: any;
  language = 'Language';

  constructor(private router: Router,
              private auth: AuthenticationService,
              private storage: LocalStorage) {
  }

  ngOnInit() {
    $(document).ready(function(){
      $('.modal').modal({dismissible: false});
    });
  }

  logout() {
    console.log("logout pressed");
    console.log(this.user);
    this.auth.logout().subscribe((data)=>{
      console.log(data);
      this.storage.remove('user');
      // this.router.navigate(['']);
      $(document).ready(function(){
        // the "href" attribute of the modal trigger must specify the modal ID that wants to be triggered
        $('#modal-logout').modal('open');
        // $('#modal-login').css('display', 'inline-block');
      });
    },(error)=>{
      console.log(error);
    })

  }
  hasUser(): boolean {
    if (localStorage.getItem('user') !== null) {
      return true;
    }
    return false;
  }

  switchLanguage() {
    window.location.reload();
  }

  reload() {
    window.location.reload();
  }

}
