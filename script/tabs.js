$(".tab").click(function() {
	$(".tab").removeClass("active").eq($(this).index()).addClass("active");
	$(".tab_item").hide().eq($(this).index()).fadeIn()
}).eq(0).addClass("active");


// $(".tabsOption").click(function() {
// 	$(".tabsOption").removeClass("active").eq($(this).index()).addClass("active");
// 	$(".tab_items").hide().eq($(this).index()).fadeIn()
// }).eq(0).addClass("active");