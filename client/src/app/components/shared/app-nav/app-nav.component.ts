import { Component } from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import {AuthService} from '../../../core/services/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-app-nav',
  templateUrl: './app-nav.component.html',
  styleUrls: ['./app-nav.component.css']
})
export class AppNavComponent {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(['(max-width: 768px)'])
    .pipe(
      map(result => result.matches)
    );

  constructor(private breakpointObserver: BreakpointObserver,
              public authService: AuthService,
              private router: Router) {}

  logout() {
    this.authService.logout();

    this.router.navigate([ '/auth/login' ]);
  }

}
