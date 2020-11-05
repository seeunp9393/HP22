$(".burger-icon").click(function (event) {
  $(".menu_wrap").fadeIn(700);
});
const burgerMenuC = $(".wrap").click(function (event) {
  $(".menu_wrap").fadeOut(500);
});

$("search-icon").click(function (event) {
  alert("미구현 되었습니다");
});

const cart = $(".cart-icon").click(function (event) {
  alert("장바구니에 물건이 없습니다.");
});

$(window).scroll(function () {
  if ($(this).scrollTop() > 300) {
    $("#backToTop").fadeIn(200);
  } else {
    $("#backToTop").fadeOut(200);
  }
});
$("#backToTop").click(function (e) {
  e.preventDefault();
  $("html, body").animate({ scrollTop: 0 }, 200);
});
