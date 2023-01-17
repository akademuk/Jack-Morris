
$(document).ready(function(){
let currentLocation = 'firstPage';
let autoScrolling = false;

let [firstHeight,secondHeight,thirdHeight] = [$('#firstPage').offset().top,
 $('#secondPage').offset().top,
 $('#thirdPage').offset().top];

$(window).scroll(e => {
    let scrolled = $(window).scrollTop();
    // Если user поскроллил
    if (!autoScrolling) {
    	if (scrolled > 1 && currentLocation == 'firstPage') {
            scrollPage(secondHeight, 'secondPage');
        } else if (scrolled > secondHeight && currentLocation == 'secondPage') {
            scrollPage(thirdHeight, 'thirdPage');
        } else if (scrolled < thirdHeight && currentLocation == 'thirdPage') {
            scrollPage(secondHeight, 'secondPage');
        } else if (scrolled < secondHeight && currentLocation == 'secondPage') {
            scrollPage(firstHeight, 'firstPage');
        }
    }

    function scrollPage(nextHeight, page){
      currentLocation = page; autoScrolling = true;
      $('body,html').animate({scrollTop:nextHeight}, 500, () => {
          autoScrolling = false;
      });
    }
})
});

