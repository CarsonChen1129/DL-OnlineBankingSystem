import {Injectable} from "@angular/core";
import {Observable} from "rxjs/Observable";

/**
 * @author Carson Chen
 * Async LocalStorage provider.
 */
@Injectable()
export class LocalStorage {

  constructor() {}

  set(key: string, value: any) {
    return Promise.resolve().then(() => {
      localStorage.setItem(key, value);
    });
  }

  get(key: string) {
    return Promise.resolve().then(() => {
      return localStorage.getItem(key);
    });
  }

  remove(key: string) {
    return Promise.resolve().then(() => {
      localStorage.removeItem(key);
    });
  }

  clear() {
    return Promise.resolve().then(() => {
      localStorage.clear();
    });
  }

  setObject(key: string, value: any) {
    return Promise.resolve().then(() => {
      localStorage.setItem(key, JSON.stringify(value));
    });
  }

  getObjectPromise(key: string) {
    return new Promise((resolve, reject) =>{
      resolve(localStorage.getItem(key))
    });
  }

  getObjectObservable(key: string) {
    return Observable.create(observer => {
      this.get(key).then((val) => {
        observer.next(val);
        observer.complete();
      });
    });
  }
  existPromise(key: string) {
    return new Promise((resolve, reject) => {
      this.get(key).then((val) => {
        if (val) {resolve(true); }
        resolve(false);
      });
    });
  }

}
