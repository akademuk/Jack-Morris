$(document).ready(function(){
    $(".accordion").on("click", ".heading", function() {

    $(this).toggleClass("active").next().slideToggle();

    $(".contents").not($(this).next()).css("display:flex").slideUp(300);
                 
    $(this).siblings().removeClass("active");
    });
   });
        