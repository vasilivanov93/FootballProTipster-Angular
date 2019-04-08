import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule} from '@angular/forms';

// Modules
import {SharedModule} from './components/shared/shared.module';
import { RegisterComponent } from './components/authentication/register/register.component';
import { CheckPasswordDirective } from './core/directives/check-password.directive';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    CheckPasswordDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
