import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { ResultsPanelComponent } from './results-panel/results-panel.component';
import { MovieCardComponent } from './movie-card/movie-card.component';
import { MatButtonModule } from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';



@NgModule({
  declarations: [
    SearchBarComponent,
    ResultsPanelComponent,
    MovieCardComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatCardModule
  ],
  exports: [
    SearchBarComponent,
    ResultsPanelComponent
  ]
})
export class MovieSearcherModule { }
