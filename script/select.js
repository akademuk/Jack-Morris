$('.md-select').on('click', function(){
    $(this).toggleClass('active')
  })
  
  $('.md-select ul li').on('click', function() {
    var v = $(this).text();
    $('.md-select ul li').not($(this)).removeClass('active');
    $(this).addClass('active');
    $('.md-select label button').text(v)
  })
  