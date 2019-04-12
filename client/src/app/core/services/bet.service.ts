import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Bet} from '../models/Bet';

@Injectable({
  providedIn: 'root'
})
export class BetService {
  private readonly createUrl = 'http://localhost:5000/bet/create';
  private readonly historyUrl = 'http://localhost:5000/bet/history';
  private readonly betByIdUrl = 'http://localhost:5000/bet/';
  private readonly editBetUrl = 'http://localhost:5000/bet/edit/';
  private readonly deleteBetUrl = 'http://localhost:5000/bet/delete/';
  private readonly lastFiveBetUrl = 'http://localhost:5000/bet/home';

  constructor(private http: HttpClient) { }

  create(body) {
    return this.http.post<Bet>(this.createUrl, body);
  }

  history() {
    return this.http.get<Bet[]>(this.historyUrl);
  }

  getBetById(id) {
    return this.http.get<Bet>(this.betByIdUrl + id);
  }

  editBet(id, bet: Bet) {
    return this.http.put(this.editBetUrl + id, bet);
  }

  deleteBet(id) {
    return this.http.delete(this.deleteBetUrl + id);
  }

  lastFiveBet() {
    return this.http.get<Bet[]>(this.lastFiveBetUrl);
  }
}
