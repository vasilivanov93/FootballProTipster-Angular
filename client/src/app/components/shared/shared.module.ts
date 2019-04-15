import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

// Cdk and Material
import {LayoutModule} from '@angular/cdk/layout';
import {
  MatToolbarModule,
  MatButtonModule,
  MatSidenavModule,
  MatIconModule,
  MatListModule
} from '@angular/material';

// Components
import { NavigationComponent } from './navigation/navigation.component';
import { HomeComponent } from './home/home.component';
import { AnonymousHomeComponent } from './anonymous-home/anonymous-home.component';
import { AuthenticationHomeComponent } from './authentication-home/authentication-home.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule
  ],
  declarations: [
    NavigationComponent,
    HomeComponent,
    FooterComponent,
    AnonymousHomeComponent,
    AuthenticationHomeComponent
  ],
  exports: [
    NavigationComponent,
    HomeComponent,
    FooterComponent
  ]
})

export class SharedModule {
}
