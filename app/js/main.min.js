jQuery(document).ready(function() {
	
	var header = $('.header');
	var nav = $('.nav--header');

	window.onscroll = function() {
		if(window.pageYOffset > header.height()) {
			nav.addClass('nav--move');
		} else{
			nav.removeClass('nav--move');
		}
	}

	$('#mc-form').ajaxChimp({
    	url: 'https://osen1488.us20.list-manage.com/subscribe/post?u=e8612724622d81c58ae549096&amp;id=4b4036cebf'
  	});
  	$(document).on ('click','.burger', function(){
  		$(this).toggleClass('is-active');
  		$('.header__nav-wrap').toggleClass('is-active');
  	});
});
