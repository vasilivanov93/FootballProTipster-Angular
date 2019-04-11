import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {FormsModule} from '@angular/forms';

// Components
import {AppNavComponent} from './app-nav/app-nav.component';
import {HomeComponent} from './home/home.component';
import {FooterComponent} from './footer/footer.component';

// Cdk and Material
import {LayoutModule} from '@angular/cdk/layout';
import {
  MatToolbarModule,
  MatButtonModule,
  MatSidenavModule,
  MatIconModule,
  MatListModule
} from '@angular/material';

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
    AppNavComponent,
    HomeComponent,
    FooterComponent
  ],
  exports: [
    AppNavComponent,
    HomeComponent,
    FooterComponent
  ]
})

export class SharedModule {
}
