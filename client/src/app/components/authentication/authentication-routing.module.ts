import { NgModule } from '@angular/core';
import { RouterModule, Route } from '@angular/router';

// Components
import {RegisterComponent} from './register/register.component';
import {LoginComponent} from './login/login.component';

const authRoutes: Route[] = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forChild(authRoutes)],
  exports: [RouterModule]
})
export class AuthenticationRoutingModule { }
