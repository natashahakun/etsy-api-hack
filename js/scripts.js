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
    part: "",
    key: "",
    q:
  };
  url = "";

  $.getJSON(url, params, function(data){
    showResults(data);
  });
}

function showResults(results) {
  var newMatch = $("<div></div>", {class: "individual-match"});
  $(".matches").append(newMatch);
  var newThumbnail = $("<div></div>", {class: "thumbnail"})
  $(newMatch).append(newThumbnail);
  var newLink = $("<div></div>", {class: "link"})
  $(newMatch).append(newLink);
}

