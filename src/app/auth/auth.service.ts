import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Subject } from 'rxjs'

@Injectable({ providedIn: 'root' })
export class AuthService {

  private authStatus = new Subject<boolean>();
  private pagename = new BehaviorSubject("home");

  constructor(private router: Router) {

  }

  getAuthStatus() {
    return this.authStatus.asObservable();
  }

  getAuthReplay() {
    return this.pagename.asObservable();
  }

  login(username: string, password: string) {
    this.authStatus.next(true);
    this.pagename.next("home");
    localStorage.setItem('isLoggedIn', 'true');
  }

  logout() {
    this.authStatus.next(false);
    this.pagename.next("login");
    localStorage.setItem('isLoggedIn', 'false');
  }


}
