import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import {AuthService} from '../../../core/services/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @ViewChild('loginForm') loginForm: NgForm;
  constructor(private authService: AuthService,
              private router: Router) { }

  ngOnInit() {
  }

  login() {
    this.authService
      .login(this.loginForm.value)
      .subscribe((data) => {
        localStorage.setItem('token', data['token']);
        localStorage.setItem('username', data['user']['name']);
        localStorage.setItem('isAdmin', data['user']['isAdmin']);
        this.router.navigate([ '/home' ]);
      });
  }
}
