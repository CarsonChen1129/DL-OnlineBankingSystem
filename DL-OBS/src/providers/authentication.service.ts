
import {Injectable} from "@angular/core";
import {Observable} from "rxjs/Observable";
import {Router} from "@angular/router";
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";

@Injectable()
export class AuthenticationService {

  private headers = new HttpHeaders({'Content-Type': 'application/x-www-form-urlencoded',
    'Pragma': 'no-cache', 'Cache-Control': 'no-cache'});

  constructor(
    private http: HttpClient,
    public router: Router
  ) {}

  login(formData): Observable<any> {
    // return this.afAuth.auth.signInWithEmailAndPassword(
    //   formData.value.email,
    //   formData.value.password
    // ).toObservable();

    return this.http.post('http://localhost:8000/auth/login', JSON.stringify({email: formData.value.email, password: formData.value.password}), {headers: this.headers});
  }
  checkRegistrationStatus(email, pin): Observable<any> {
    return this.http.get('http://localhost:8000/accounts',{headers: this.headers, params: new HttpParams().set('email', email).set('pin', pin)});
  }
  register(user): Observable<any> {
    return this.http.post('http://localhost:8000/accounts', JSON.stringify(user), {headers: this.headers});
  }
  logout(): Observable<any> {
    return this.http.post('http://localhost:8000/auth/logout', JSON.stringify({}),{headers: this.headers});
  }
}
