using MovieSearcherServerMinimalAPI.Models;

namespace MovieSearcherServerMinimalAPI.ModelsDTO
{
    public class MovieDetailedDataDTO
    {
        public MovieDetailedDataDTO(MovieDetailedData movieDetailedData)
        {
            this.imdbID = movieDetailedData.imdbID;
            Title = movieDetailedData.Title;

            Year = int.TryParse(movieDetailedData.Year, out int year)? 
                year : null;
            Released = DateTime.TryParse(movieDetailedData.Released, out DateTime released)?
                released : null;
            Runtime = TimeSpan.TryParse(movieDetailedData.Runtime, out TimeSpan runtime) ?
                runtime : null;           
            
            Genre = movieDetailedData.Genre;
            Director = movieDetailedData.Director;
            Writer = movieDetailedData.Writer;
            Actors = movieDetailedData.Actors?.Split(", ");
            Plot = movieDetailedData.Plot;

            this.imdbRating = float.TryParse(movieDetailedData.imdbRating,out float rating) ?
                rating : null;
        }

        public string? imdbID { get; set; }
        public string? Title { get; set; }
        public int? Year { get; set; }
        public DateTime? Released { get; set; }
        public TimeSpan? Runtime { get; set; }
        public string? Genre { get; set; }
        public string? Director { get; set; }
        public string? Writer { get; set; }
        public string[]? Actors { get; set; }
        public string? Plot { get; set; }
        public float? imdbRating { get; set; }


    }
}
