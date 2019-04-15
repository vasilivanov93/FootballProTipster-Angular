import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../core/services/auth.service';
import { Observable } from 'rxjs';
import { Bet } from '../../../core/models/Bet';
import { BetService } from '../../../core/services/bet.service';

@Component({
  selector: 'app-history-bet',
  templateUrl: './history-bet.component.html',
  styleUrls: ['./history-bet.component.css']
})
export class HistoryBetComponent implements OnInit {
  bet$: Observable<Bet[]>;
  constructor(private authService: AuthService,
              private betService: BetService) { }

  ngOnInit() {
    this.bet$ = this.betService.history();
  }
}
