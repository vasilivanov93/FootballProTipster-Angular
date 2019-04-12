import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';

// Modules
import {SharedModule} from './components/shared/shared.module';

// Interceptors
import {JwtInterceptorService} from './core/interceptors/jwt-interceptor.service';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ToastrModule} from 'ngx-toastr';
import {ResponseHandlerInterceptorService} from './core/interceptors/response-handler-interceptor.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule,
    SharedModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptorService, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ResponseHandlerInterceptorService, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
