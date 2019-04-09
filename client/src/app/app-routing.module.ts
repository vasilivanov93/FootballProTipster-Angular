import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './components/shared/home/home.component';
import {AnonymousGuard} from './core/guards/anonymous.guard';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home', component: HomeComponent },
  { path: 'auth', loadChildren: './components/authentication/authentication.module#AuthenticationModule', canLoad: [AnonymousGuard]},
  { path: 'bet', loadChildren: './components/bet/bet.module#BetModule'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
