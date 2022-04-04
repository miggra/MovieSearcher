import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.less']
})
export class SearchBarComponent implements OnInit {

  header = 'Search&Watch'
  explainationPhrases = ['Enter the query','and find movie']
  endingPhrase = 'It`s Simple!'

  constructor() { }

  ngOnInit(): void {
  }

}
