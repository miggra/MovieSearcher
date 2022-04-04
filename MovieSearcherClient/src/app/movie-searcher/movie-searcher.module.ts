import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { ResultsPanelComponent } from './results-panel/results-panel.component';



@NgModule({
  declarations: [
    SearchBarComponent,
    ResultsPanelComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SearchBarComponent,
    ResultsPanelComponent
  ]
})
export class MovieSearcherModule { }
