import { NgModule } from '@angular/core';
import { RouterModule, Route} from '@angular/router';

// Components
import {CreateBetComponent} from './create-bet/create-bet.component';

const betRoutes: Route[] = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'create', component: CreateBetComponent }
];

@NgModule({
  imports: [RouterModule.forChild(betRoutes)],
  exports: [RouterModule]
})
export class BetRoutingModule { }
