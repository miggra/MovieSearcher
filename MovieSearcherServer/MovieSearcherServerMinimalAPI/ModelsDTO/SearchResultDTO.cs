using MovieSearcherServerMinimalAPI.Models;

namespace MovieSearcherServerMinimalAPI.ModelsDTO
{
    class SearchResultDTO
    {
        public SearchResultDTO(SearchResult searchResult)
        {
            Movies = searchResult.Search.Select(r => new MovieShortDataDTO(r)).ToList();
            TotalResults = searchResult.totalResults;
            Response = searchResult.Response;
            Error = searchResult.Error;
        }

        public List<MovieShortDataDTO> Movies { get; set; }
        public string? TotalResults { get; set; }
        public string? Response { get; set; }
        public string? Error {get; set;}
    }
         
}
