import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../../core/services/auth.service';
import {BetService} from '../../../core/services/bet.service';
import {Observable} from 'rxjs';
import {Bet} from '../../../core/models/Bet';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  bet$: Observable<Bet[]>;

  constructor(public authService: AuthService,
              private betService: BetService) { }

  ngOnInit() {
    this.bet$ = this.betService.history();
  }
}
