import {Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {AuthService} from '../../../core/services/auth.service';
import {BetService} from '../../../core/services/bet.service';
import {Observable} from 'rxjs';
import {Bet} from '../../../core/models/Bet';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  bet$: Observable<Bet[]>;
  lastFiveBet$: Observable<Bet[]>;
  @ViewChild('contactForm') contactForm: NgForm;
  @ViewChild('test') test: ElementRef;
  constructor(public authService: AuthService,
              private betService: BetService) { }

  ngOnInit() {
    this.bet$ = this.betService.history();
    this.lastFiveBet$ = this.betService.lastFiveBet();
  }

  contact() {
    this.contactForm.reset();
  }

  triggerFalseClick() {
    const el: HTMLElement = this.test.nativeElement as HTMLElement;
    el.click();
  }
}
