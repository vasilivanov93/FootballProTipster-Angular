import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { BetService } from '../../../core/services/bet.service';

@Component({
  selector: 'app-create-bet',
  templateUrl: './create-bet.component.html',
  styleUrls: ['./create-bet.component.css']
})
export class CreateBetComponent {
  @ViewChild('createForm') createForm: NgForm;
  constructor(private betService: BetService,
              private router: Router) { }

  create() {
    this.betService.create(this.createForm.value).subscribe((data) => {
      this.router.navigate([ '/bet/history' ]);
    });
  }
}
