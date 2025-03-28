
$(document).ready(function () {
  // Search toggle
  $(".searchToggle").on("click", function () {
    $(".search-content").toggleClass("is--visible");
    $(".initial-content").toggleClass("is--hidden");
    // set focus on input
    setTimeout(function () {
        $(".search-content input").focus();
    }, 400);
  });
})