namespace MovieSearcherServerMinimalAPI.Models
{
    public record MovieDetailedData
    (
        string Title,
        string? Year,
        string? Rated,
        string? Released,
        string? Runtime,
        string? Genre,
        string? Director,
        string? Writer,
        string? Actors,
        string? Plot,
        string? imdbRating,
        string imdbID
    );
}
