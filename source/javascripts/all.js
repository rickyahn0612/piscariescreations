//= require_tree .

$(document).ready(function (e) {
	$('html, body').fadeIn(2000);
  $('.symbol').animate({'opacity': 1, top: 0}, 2000, function(){
    $('.words').animate({'opacity': 1, top: 0}, 1000, function(){

      $('.coming-soon-txt, span, a').fadeIn(2000);
    })

  })
});
