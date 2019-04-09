import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import {BetService} from '../../../core/services/bet.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-create-bet',
  templateUrl: './create-bet.component.html',
  styleUrls: ['./create-bet.component.css']
})
export class CreateBetComponent implements OnInit {
  @ViewChild('createForm') createForm: NgForm;
  constructor(private betService: BetService,
              private router: Router) { }

  ngOnInit() {
  }

  create() {
    this.betService.create(this.createForm.value).subscribe((data) => {
      this.router.navigate([ '/bet/history' ]);
    });
  }
}
