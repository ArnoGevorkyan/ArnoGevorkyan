$(document).ready(function () {
  var body = $("body");
  body.fadeIn(1000);
  $(document).on(
    "click",
    "a:not([href^='#']):not([href^='tel']):not([href^='mailto'])",
    function (e) {
      e.preventDefault();
      $("body").fadeOut(1000);
      var self = this;
      setTimeout(function () {
        window.location.href = $(self).attr("href");
      }, 1000);
    }
  );
});
