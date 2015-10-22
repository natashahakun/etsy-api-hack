$(document).ready(function() {

  $(".submit").click(function(event) {
    event.preventDefault();
    var searchTerm = $(".search-items").val();
    getRequest(searchTerm);

    $(".search-items").val('');
    $(".search-shop").val('');
  })

});

function getRequest(searchTerm){
  var params = {
    keywords: searchTerm,
    api_key: "c03v0gzczhnbj4b0rw4aaoh0"
  };
  url = "https://openapi.etsy.com/v2/listings/active.js";

  $.ajax({
    url: url,
    data: params,
    type: "GET",
    dataType: "jsonp",
    success: function(data) {
      showResults(data.results);
    },
    error: function(data){
      console.log(data,'error');
    }
  })
}

function showResults(results) {
  for (i = 0; i < results.length; i++) {
    var newMatch = $("<div></div>", {class: "individual-match"});
    $(".matches").append(newMatch);
    var newThumbnail = $("<div></div>", {class: "thumbnail"})
    $(newMatch).append(newThumbnail);
    var newLink = $("<div></div>", {class: "link"})
    $(newMatch).append(newLink);
    var text = results[i].title;
    $(newLink).append(text);
  }
}

