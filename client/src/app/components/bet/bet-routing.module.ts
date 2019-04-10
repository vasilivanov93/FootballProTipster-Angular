import { NgModule } from '@angular/core';
import { RouterModule, Route} from '@angular/router';

// Components
import {CreateBetComponent} from './create-bet/create-bet.component';
import {HistoryBetComponent} from './history-bet/history-bet.component';
import {EditBetComponent} from './edit-bet/edit-bet.component';
import {SingleBetResolver} from '../../core/resolvers/single-bet.resolver';
import {DeleteBetComponent} from './delete-bet/delete-bet.component';

const betRoutes: Route[] = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'create', component: CreateBetComponent },
  { path: 'history', component: HistoryBetComponent },
  { path: 'edit/:id', component: EditBetComponent, resolve: { singleBet: SingleBetResolver } },
  { path: 'delete/:id', component: DeleteBetComponent, resolve: { singleBet: SingleBetResolver } }
];

@NgModule({
  imports: [RouterModule.forChild(betRoutes)],
  exports: [RouterModule]
})
export class BetRoutingModule { }
