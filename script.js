document.getElementById("searchButton").addEventListener("click", function(event) {
  event.preventDefault();

  var url = 'https://newsapi.org/v2/top-headlines?' +
          'country=us&' +
          'apiKey=7bc3b4e1e6ff4ab08d371c9a5617932c';

  var req = new Request(url);
  fetch(req)
      .then(function(response) {
            return response.json();
      }).then(function(json) {
        console.log(json.articles)
        let result = json;
        var text = ""
        text += "<p>";
        for (var key in json.articles){
          var author = json.articles[key].author
          if (author === null)
            author = "Author not specified"
          // let obj = result.PromiseValue[key];
          text += "<p>Author: " + author +"<br>";
          text += "<a href=" + json.articles[key].url + ">" +json.articles[key].title +"</a></p>";
          // console.log(key);

        }
        text += "</p>";
        document.getElementById("jobResults").innerHTML = text;

      });

});
