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
}
