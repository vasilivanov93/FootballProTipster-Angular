import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

// Components
import {RegisterComponent} from './register/register.component';
import {LoginComponent} from './login/login.component';

// Directives
import {CheckPasswordDirective} from '../../core/directives/check-password.directive';
import {HttpClientModule} from '@angular/common/http';
import {AuthenticationRoutingModule} from './authentication-routing.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    HttpClientModule,
    AuthenticationRoutingModule
  ],
  declarations: [
    RegisterComponent,
    LoginComponent,
    CheckPasswordDirective
  ],
  exports: [
    RegisterComponent,
    LoginComponent,
    CheckPasswordDirective
  ]
})

export class AuthenticationModule { }
