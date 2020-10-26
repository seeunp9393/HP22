$(document).ready(function () {
  $(".nav_icon>a>span").on("click", function () {
    $(".menu_wrap").show();
    $(".menu_wrap").animate({
      right: 0,
    });
  });
  $(".nav_icon>a").on("click", function () {
    $(".menu_wrap").hide();
    $(".menu_wrap").animate({
      right: "-" + 50 + "%",
    });
  });
});
