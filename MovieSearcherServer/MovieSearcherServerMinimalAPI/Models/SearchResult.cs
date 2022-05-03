namespace MovieSearcherServerMinimalAPI.Models
{
    public record SearchResult(
        List<MovieShortData> Search,
        string? totalResults,
        string? Response,
        string? Error);    
}
