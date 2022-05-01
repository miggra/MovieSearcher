import { Component, Input, OnInit } from '@angular/core';
import { MovieCard } from './movie-card';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.less']
})
export class MovieCardComponent implements OnInit {

  @Input() movieCard!: MovieCard;
  constructor() {
  }

  ngOnInit(): void {
  }

}
