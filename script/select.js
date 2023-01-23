$(document).ready(function(){
  $(".accordion1").on("click", ".heading1", function() {
  $(this).toggleClass("active").next().slideToggle();
  $(".contents1").not($(this).next()).slideUp(300); 
  $(this).siblings().removeClass("active");
  });

  $(".option").click(function() {
    $(".option").removeClass("active").eq($(this).index()).addClass("active");
    $(".heading1").hide().eq($(this).index()).fadeIn()
  }).eq(0).addClass("active");
});