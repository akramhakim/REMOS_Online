import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username;
  password;

  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit() {
    this.authService.getAuthStatus()
  }

  onLogin(form: NgForm) {
    if (form.invalid) return;
    console.log(form.value);

    this.authService.login(form.value.username, form.value.password)
    this.router.navigate(['/home']);
  }
}
