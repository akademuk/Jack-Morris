$('.slider').slick({
  draggable: true,
  autoplay: true,
  autoplaySpeed: 5000,
  arrows: false,
  dots: true,
  fade: true,
  speed: 500,
  infinite: true,
  cssEase: 'ease-in-out',
  touchThreshold: 100,
  appendDots: $('.bannerSliderDots'),
  customPaging: function (slider,index) { 
    return '0' + (index + 1); 
    }
})