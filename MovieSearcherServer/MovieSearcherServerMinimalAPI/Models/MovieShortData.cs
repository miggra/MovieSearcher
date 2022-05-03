namespace MovieSearcherServerMinimalAPI.Models
{
    public record MovieShortData(
        string? Title,
        string? Year,
        string? imdbID,
        string? Type,
        string? Poster
        );
}
