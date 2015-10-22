$(document).ready(function() {

  $(".submit").click(function(event) {
    event.preventDefault();
    clearBox();
    $(".matches-title").css("visibility", "visible");
    var searchTerm = $(".search-items").val();
    getRequest(searchTerm);
    $(".search-items").val('');
    $(".search-shop").val('');
  })

});

function clearBox() {
  $( ".individual-match" ).remove();
}

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
      console.log(data.results);
    },
    error: function(data){
      console.log(data,'error');
    }
  })
}

function showResults(results) {
  for (i = 0; i < 10; i++) {

 var params = {
      api_key: "c03v0gzczhnbj4b0rw4aaoh0"
    };

    $.ajax({
    url: "https://openapi.etsy.com/v2/listings/" + results[i].listing_id + "/images.js",
    data: params,
    type: "GET",
    dataType: "jsonp",
    success: function(data) {
      var newMatch = $("<div></div>", {class: "individual-match"});
      $(".matches").append(newMatch);

      var newThumbnail = $("<div></div>", {class: "thumbnail"})
      $(newMatch).append(newThumbnail);

      var newLink = $("<div></div>", {class: "link"})
      $(newMatch).append(newLink);

      var text = results[i].title;
      $(newLink).append(text);

      var img = $("<img src=" + '"' + data.results[0].url_75x75 + '"' + " />");
      $(newThumbnail).append(img);

      },
    error: function(data){
      console.log(data,'error');
    }
  })
  }
}

