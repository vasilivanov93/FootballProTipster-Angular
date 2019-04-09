import { NgModule } from '@angular/core';
import { RouterModule, Route} from '@angular/router';

// Components
import {CreateBetComponent} from './create-bet/create-bet.component';
import {HistoryBetComponent} from './history-bet/history-bet.component';

const betRoutes: Route[] = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'create', component: CreateBetComponent },
  { path: 'history', component: HistoryBetComponent }
];

@NgModule({
  imports: [RouterModule.forChild(betRoutes)],
  exports: [RouterModule]
})
export class BetRoutingModule { }
