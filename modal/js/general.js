$(document).ready(function(){

	$('.modal-link').click(function(e){  // call the class or id on which you want to show up your modal
		e.stopImmediatePropagation();
		e.preventDefault();
		var image_url = $(".img-wrapper img").prop("src");
		var data_attr = $(this).attr('data-toggle');
		if($(this).is('[data-toggle]')) {
			$('html, body').addClass('modal-open');
			$('.modal-wrapper .img-wrapper').css('background-image', 'url("'+image_url+'")');
			$('.modal-wrapper').removeClass('open');
			var modal_id = $(this).attr('href');
			$(modal_id).addClass('open');
			if($(window).width() >= 1200) {
				$('body').css('padding-right','17px');
			}
			else {
				$('body').removeAttr("style");
			}
			return false;
		}
	});

	$('.modal-close').click(function(){
		$('.modal-wrapper').removeClass('open');
		setTimeout(function () {
			$('body').removeAttr("style");
			$('html, body').removeClass('modal-open');
		},400);
	});

	$('.modal-content').click(function(e){
		e.stopPropagation();
	});

	$('html, body').click(function(){
		$('.modal-wrapper').removeClass('open');
		setTimeout(function () {
			$('body').removeAttr("style");
			$('html, body').removeClass('modal-open');
		},400);
	});
});