import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import {Router} from '@angular/router';
import {AuthService} from '../../../core/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  @ViewChild('registerForm') registerForm: NgForm;
  constructor(private authService: AuthService,
              private router: Router) { }

  ngOnInit() {
  }

  register() {
    const body = {
      email: this.registerForm.value.email,
      password: this.registerForm.value.passwords['password'],
      name: this.registerForm.value.name
    }
    this.authService
      .register(body)
      .subscribe((data) => {
        this.router.navigate([ '/login' ]);
      });
  }
}
