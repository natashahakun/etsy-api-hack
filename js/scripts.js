$(document).ready(function() {

  $(".submit").click(function() {
    var newMatch = $("<div></div>", {class: "individual-match"})
  })
    $(".matches-container").append(newMatch);

    var newThumbnail = $("<div></div>", {class: "thumbnail"})
    $(newMatch).append(newThumbnail);
    var newLink = $("<div></div>", {class: "link"})
    $(newMatch).append(newLink);

    $(".search-items").val('');
    $(".search-shop").val('');
});
