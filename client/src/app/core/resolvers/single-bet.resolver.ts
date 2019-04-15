import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { BetService } from '../services/bet.service';
import { Bet } from '../models/Bet';

@Injectable({
  providedIn: 'root'
})
export class SingleBetResolver implements Resolve<Bet> {

  constructor(private betService: BetService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Bet> | Promise<Bet> | Bet {
    const id = route.params.id;

    return this.betService.getBetById(id);
  }
}
