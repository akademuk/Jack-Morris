//* Shopping Cart Pop-up STEP 1
$(".formSubmit").click(function() {
    $(".step1").fadeIn(500);
    $("body").addClass("active");
  });
  $(".closer").click(function() {
    $(".step1").fadeOut(500);
    $("body").removeClass("active");
});

//* Shopping Cart Pop-up STEP 2
$(".btnStep1").click(function() {
  $(".step2").fadeIn(500);
  $("body").addClass("active");
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
  $(".step2").fadeOut(500);
});
$(".buttonPrev3").click(function() {
  $(".step2").fadeIn(500);
  $(".step3").fadeOut(500);
});