using MovieSearcherServerMinimalAPI.Models;

namespace MovieSearcherServerMinimalAPI.ModelsDTO
{
    public class MovieShortDataDTO
    {
        public MovieShortDataDTO(MovieShortData movieShortData)
        {
            if (movieShortData != null)
            {
                Title = movieShortData.Title;
                Year = int.TryParse(movieShortData.Year, out int year) ?
                    year : null;
                this.imdbId = movieShortData.imdbID;
                Type = movieShortData.Type;
                Poster = movieShortData.Poster;
            }            
        }

        public string? Title {get; set;}
        public int? Year {get; set;}
        public string? imdbId {get; set;}
        public string? Type {get; set;}
        public string? Poster {get; set; }
    }
}
