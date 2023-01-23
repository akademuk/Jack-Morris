

// делаете переменную в начале кода
var isMobile = false;
// проверка на размер экрана (размер я брал вроде с Bootstrap-а)
$(document).ready( function() {
    if ($('body').width() <= 1280) {
        isMobile = true;
    }
    // и потом если нужен код только для телефона:
    if (isMobile) {
        
    }
    // или для остальных
    if (!isMobile) {
        let currentLocation = 'firstPage';
        let autoScrolling = false;
        
        let [firstHeight,secondHeight,thirdHeight] = [$('#firstPage').offset().top,
         $('#secondPage').offset().top,
         $('#thirdPage').offset().top];
        
        $(document).scroll(e => {
            let scrolled = $(window).scrollTop();
            // Если user поскроллил
            if (!autoScrolling) {
                if (scrolled > 1 && currentLocation === 'firstPage') {
                    scrollPage(secondHeight, 'secondPage');
                } else if (scrolled > secondHeight + 1 && currentLocation == 'secondPage') {
                    scrollPage(thirdHeight, 'thirdPage');
                } else if (scrolled < thirdHeight - 1 && currentLocation == 'thirdPage') {
                    scrollPage(secondHeight, 'secondPage');
                } else if (scrolled < secondHeight - 1 && currentLocation == 'secondPage') {
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
    }
} );
