import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from './auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'remos';
  isLoggedIn: boolean = false;
  constructor(private router: Router, private authService: AuthService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {

    this.authService.getAuthReplay()
      .subscribe(res => {
        console.log(res);
        if (res == "home") {
          this.isLoggedIn = true;
        } else if (res == "login") {
          this.isLoggedIn = false;
        }
      })
  }

  onLogout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
