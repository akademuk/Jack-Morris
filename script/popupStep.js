//* Shopping Cart Pop-up STEP 1
$(".formSubmit").click(function() {
    $(".step1").fadeIn(500);
    $("body").addClass("active");
    $(".popup__content").addClass("animation");
  });
  $(".closer").click(function() {
    $(".step1").fadeOut(500);
    $("body").removeClass("active");
    $(".popup__content").removeClass("animation");
});

//* Shopping Cart Pop-up STEP 2
$(".btnStep1").click(function() {
  $(".step2").fadeIn(500);
  $("body").addClass("active");
  $(".step1").removeClass("animation");
  $(".step1").fadeOut(500);
});
$(".closer2").click(function() {
  $(".step2").fadeOut(500);
  $(".step1").fadeOut(500);
  $("body").removeClass("active");
});

//* Shopping Cart Pop-up STEP 3
$(".btnStep2").click(function() {
  $(".step3").fadeIn(500);
  $("body").addClass("active");
});
$(".closer3").click(function() {
  $(".step3").fadeOut(500);
  $(".step2").fadeOut(500);
  $(".step1").fadeOut(500);
  $("body").removeClass("active");
});




$(".closerPrev").click(function() {
  $(".step1").fadeIn(500);
  $(".step2").fadeOut(500);
  $(".step1 .popup__content .popupContents").scrollTop(0);
  $(".step2 .popup__content").addClass("animationRight");
  $(".step1 .popup__content").removeClass("animation");
});
$(".buttonPrev3").click(function() {
  $(".step3 .popup__content").addClass("animationRight");
  $(".step2").fadeOut(500);
  $(".step3").fadeOut(500);
  $(".step2 .popup__content .popupContents").scrollTop(0);
});
