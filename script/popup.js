$(document).ready(function(){
    $("#setCookie").click(function () {
    $.cookie("popup", "", { expires:0, path: '/' });
    $("#bg_popup").hide(); 
    $("body").removeClass("active");
    });
  
    if ( $.cookie("popup") == null )  {
        setTimeout(function(){
        $("#bg_popup").show();
        }, 1000)
        $("body").addClass("active");
    }
    else { 
      $("#bg_popup").hide();
    }
  });
  