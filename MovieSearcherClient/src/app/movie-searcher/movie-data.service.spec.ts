import { TestBed } from '@angular/core/testing';
import { MovieCard } from './movie-card/movie-card';

import { MovieDataService } from './movie-data.service';

describe('MovieDataService', () => {
  let service: MovieDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MovieDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return movies on getMovies()', () => {
    expect(service.getMovies()).toBeTruthy;
  });

  it('should return movies on getMovies()', () => {
    service.getMovies().subscribe(movies => {
      expect(movies[0].title).toBe("Fight Club")
    })
    

  });
});
