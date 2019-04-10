import { Component, OnInit } from '@angular/core';
import {Bet} from '../../../core/models/Bet';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-delete-bet',
  templateUrl: './delete-bet.component.html',
  styleUrls: ['./delete-bet.component.css']
})
export class DeleteBetComponent implements OnInit {
  resultBets: Array<string> = ['Win', 'Lose', 'Draw'];
  bet: Bet;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.bet = this.route.snapshot.data['singleBet'];
  }

  delete(id) {

  }
}
