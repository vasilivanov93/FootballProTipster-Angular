import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Observable} from 'rxjs';
import {Bet} from '../../../core/models/Bet';
import {NgForm} from '@angular/forms';
import {BetService} from '../../../core/services/bet.service';

@Component({
  selector: 'app-authentication-home',
  templateUrl: './authentication-home.component.html',
  styleUrls: ['./authentication-home.component.css']
})
export class AuthenticationHomeComponent implements OnInit {
  bet$: Observable<Bet[]>;
  lastFiveBet$: Observable<Bet[]>;
  @ViewChild('contactForm') contactForm: NgForm;
  @ViewChild('openMail') openMail: ElementRef;
  constructor(private betService: BetService) { }

  ngOnInit() {
    this.bet$ = this.betService.history();
    this.lastFiveBet$ = this.betService.lastFiveBet();
  }

  contact() {
    this.contactForm.reset();
  }

  triggerFalseClick() {
    const el: HTMLElement = this.openMail.nativeElement as HTMLElement;
    el.click();
  }
}
