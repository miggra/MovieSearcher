using MovieSearcherServerMinimalAPI;
using MovieSearcherServerMinimalAPI.ModelsDTO;

const string serverAllowOrigin = "MovieSerachClient";

var builder = WebApplication.CreateBuilder(args);
builder.Services.AddCors(options =>
{
    options.AddPolicy(name: serverAllowOrigin,
                      policy =>
                      {
                          policy.WithOrigins("http://localhost:4200");
                      });
});
builder.Services.AddSingleton<OMDB_DataService>(provider => 
    new OMDB_DataService(builder.Configuration["apiKey"])
);
var app = builder.Build();
app.UseCors(serverAllowOrigin);

app.MapGet("/search/{title}/{page}", async (string title, int page, OMDB_DataService service) => 
{
    var searchResult = await service.GetMoviesByTitle(title, page);
    var searchResultDTO = new SearchResultDTO(searchResult);
    return searchResultDTO;
});

app.MapGet("/movieDetails/{id}", async (string id, OMDB_DataService service) =>
{
    var detailedData = await service.GetDetailedMovieData(id);
    var detailedDataDTO = new MovieDetailedDataDTO(detailedData);
    return detailedDataDTO;
});

app.Run("http://localhost:3002");
