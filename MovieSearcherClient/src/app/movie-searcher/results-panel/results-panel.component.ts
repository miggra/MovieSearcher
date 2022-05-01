import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { of } from 'rxjs/internal/observable/of';
import { SearchResult } from '../models/search-result';
import { MovieCard } from '../movie-card/movie-card';
import { MovieDataService } from '../movie-data.service';

@Component({
  selector: 'app-results-panel',
  templateUrl: './results-panel.component.html',
  styleUrls: ['./results-panel.component.less']
})
export class ResultsPanelComponent implements OnInit {

  movieCards!: MovieCard[];
  searchResult!: SearchResult;


  maxCardsOnPage: number = 10;
  currentPage: number = 1;
  shownMovieCards!: MovieCard[];

  pageIsFirst!: boolean;
  pageIsLast!: boolean;

  constructor(private movieDataService: MovieDataService) {
  }
  
  ngOnInit(): void {
    this.movieDataService.getSearchResult('star', 1)
        .subscribe(searchResult => 
          {
            this.searchResult = searchResult
            if (searchResult.response == 'true')
            {
              this.movieCards = searchResult.moivesPreviews;
            }
          });

    this.shownMovieCards = this.getShownCards(this.currentPage, this.maxCardsOnPage);
  }

  onGoPreviousPage(){
    this.currentPage -= 1;
    this.shownMovieCards = this.getShownCards(this.currentPage, this.maxCardsOnPage);
  }

  onGoNextPage(){
    this.currentPage += 1;
    this.shownMovieCards = this.getShownCards(this.currentPage, this.maxCardsOnPage);
  }


  getShownCards(currentPage: number, maxCardsOnPage: number): MovieCard[] {
    let pageNumberInArray = currentPage - 1;
    let startCardInSlice = pageNumberInArray * maxCardsOnPage;
    let endCardInSlice = startCardInSlice + maxCardsOnPage;
    
    this.definePageStatus(startCardInSlice, endCardInSlice)
            
    return this.movieCards.slice(startCardInSlice, endCardInSlice);
  }

  definePageStatus(startCardInSlice: number, endCardInSlice: number) {
    if(startCardInSlice != 0 && endCardInSlice < this.movieCards.length){
      this.pageIsFirst = false;
      this.pageIsLast = false;
    }
    else if (startCardInSlice == 0){      
      this.pageIsFirst = true;
      this.pageIsLast = false;
    }
    else if (endCardInSlice >= this.movieCards.length){
      this.pageIsFirst = false;
      this.pageIsLast = true;
    }
  }
}

