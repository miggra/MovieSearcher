import { MovieCard } from "../movie-card/movie-card";
// import { MovieShort } from "./movie-short";

export class SearchResult {        
    constructor(
        public moivesPreviews: MovieCard[],
        public totalResults: number,
        public response: string,        
        public error: string
    ) {}
}

