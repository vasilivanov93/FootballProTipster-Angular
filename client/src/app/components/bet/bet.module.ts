import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

// Components
import {CreateBetComponent} from './create-bet/create-bet.component';

// Routing Module
import {BetRoutingModule} from './bet-routing.module';
import { HistoryBetComponent } from './history-bet/history-bet.component';
import { EditBetComponent } from './edit-bet/edit-bet.component';
import { DeleteBetComponent } from './delete-bet/delete-bet.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    HttpClientModule,
    BetRoutingModule
  ],
  declarations: [
    CreateBetComponent,
    HistoryBetComponent,
    EditBetComponent,
    DeleteBetComponent
  ],
  exports: [
    CreateBetComponent
  ]
})

export class BetModule { }
