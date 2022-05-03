using MovieSearcherServerMinimalAPI;
using MovieSearcherServerMinimalAPI.Models;
using System.Net;
using System.Text;
using System.Text.Json;

namespace MovieSearcherServerMinimalAPI
{
    internal class OMDB_DataService
    {
        private string apiKey;

        public OMDB_DataService(string apiKey)
        {
            this.apiKey = apiKey;
        }
        public async Task<SearchResult?> GetMoviesByTitle(string title, int page)
        {
            var sb = new StringBuilder("http://www.omdbapi.com/?");
            sb.Append($"apikey={this.apiKey}");
            sb.Append($"&s={title}");
            sb.Append($"&page={page}");
            string uri = sb.ToString();

            return await GetDeserializedObject<SearchResult>(uri);
        }

        public async Task<MovieDetailedData> GetDetailedMovieData(string id)
        {
            var sb = new StringBuilder("http://www.omdbapi.com/?");
            sb.Append($"apikey={this.apiKey}");
            sb.Append($"&i={id}");
            string uri = sb.ToString();

            return await GetDeserializedObject<MovieDetailedData>(uri);
        }


#pragma warning disable CS8603 // Possible null reference return.
        public async Task<T> GetDeserializedObject<T>(string uri) where T : class
        {
            try
            {
                var client = new HttpClient();
                var response = client.GetAsync(uri).Result;
                var result = await response.Content.ReadAsStringAsync();
                var deserializedResult = JsonSerializer.Deserialize<T>(result);

                return deserializedResult;

            }
            catch (WebException e)
            {
                return null;
            }
            catch (Exception e)
            {
                return null;
            }
#pragma warning restore CS8603 // Possible null reference return.
        }
    }
}







//    var request = HttpClient. //WebRequest.Create(uri);
//    request.Timeout = 1000;
//request.Method = "GET";
//request.ContentType = "application/json";
//SearchResult? searchResult;
//try
//{
//    using (var response = request.GetResponse())
//    using (var stream = response.GetResponseStream())
//    using (var reader = new StreamReader(stream, Encoding.UTF8))
//    {
//        var result = reader.ReadToEnd();
//        searchResult
//            = JsonSerializer.Deserialize<SearchResult>(result);
//        return Task.FromResult(searchResult);
//    }
//}