$('.slidersContent').slick({
    infinite: true,
    prevArrow: (".slidersPrev"),
    nextArrow: (".slidersNext"),
    draggable: true,
    dots: false,
    fade: true,
    speed: 500,
    infinite: true,
    cssEase: 'ease-in-out',
    touchThreshold: 100,
    customPaging: function (slider,index) { 
      return '0' + (index + 1); 
      }
})