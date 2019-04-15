import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { Bet } from '../../../core/models/Bet';
import { BetService } from '../../../core/services/bet.service';

@Component({
  selector: 'app-edit-bet',
  templateUrl: './edit-bet.component.html',
  styleUrls: ['./edit-bet.component.css']
})
export class EditBetComponent implements OnInit {
  resultBets: Array<string> = ['Win', 'Lose', 'Draw'];
  bet: Bet;
  @ViewChild('editForm') editForm: NgForm;
  bet$: Observable<Bet[]>;
  constructor(private route: ActivatedRoute,
              private betService: BetService,
              private router: Router) { }

  ngOnInit() {
    this.bet = this.route.snapshot.data['singleBet'];
  }

  edit() {
    this.route.params.subscribe((data) => {
      const id = data['id'];

      this.betService.editBet(id, this.editForm.value).subscribe((bet) => {
        this.bet$ = this.betService.history();

        this.router.navigate([ '/bet/history' ]);
      });
    });
  }
}
