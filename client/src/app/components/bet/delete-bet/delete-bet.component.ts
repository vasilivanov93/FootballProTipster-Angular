import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Bet } from '../../../core/models/Bet';
import { BetService } from '../../../core/services/bet.service';

@Component({
  selector: 'app-delete-bet',
  templateUrl: './delete-bet.component.html',
  styleUrls: ['./delete-bet.component.css']
})
export class DeleteBetComponent implements OnInit {
  resultBets: Array<string> = ['Win', 'Lose', 'Draw'];
  bet: Bet;
  bet$: Observable<Bet[]>;
  id: string;
  constructor(private route: ActivatedRoute,
              private betService: BetService,
              private router: Router) { }

  ngOnInit() {
    this.bet = this.route.snapshot.data['singleBet'];

    this.route.params.subscribe((data) => {
      this.id = data['id'];
    });
  }

  delete(id) {
    this.betService.deleteBet(id).subscribe((data) => {
      this.router.navigate([ '/bet/history' ]);

      this.bet$ = this.betService.history();
    });
  }
}
