import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { MovieCard } from './movie-card/movie-card';
import { map, Observable, of } from 'rxjs';
import { SearchResult } from './models/search-result';

@Injectable({
  providedIn: 'root'
})
export class MovieDataService {

  private serverBaseUrl = 'http://localhost:3002/search/';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(
    private http: HttpClient
  ) { }

  getSearchResult(searchRequest: string, page: number): Observable<SearchResult> {
    const requestUrl = this.serverBaseUrl.concat(`${searchRequest}/${page}`);
    return this.http.get<SearchResult>(requestUrl)
    .pipe(
      map(response => {
        let movies: MovieCard[] = response.movies.map(mp => 
          new MovieCard(
            mp.title,
            mp.year,            
            mp.imdbId,
            mp.type,
            mp.poster
          ));
        return new SearchResult(
          movies,
          response.totalResults,
          response.response,
          response.error 
        )
      })
    );
  }
}
