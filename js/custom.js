$(document).ready(function(){
	
	//Check to see if the window is top if not then display button
	$(window).scroll(function(){
		if ($(this).scrollTop() > 100) {
			$('.scrollToTop').fadeIn();
		} else {
			$('.scrollToTop').fadeOut();
		}
	});
	
	//Click event to scroll to top
	$('.scrollToTop').click(function(){
		$('html, body').animate({scrollTop : 0},800);
		return false;
	});
        
   $("#about-click").click(function() {
    $('html, body').animate({
        scrollTop: $("#slogan").offset().top
    }, 1000);
});
   $("#technical-click").click(function() {
    $('html, body').animate({
        scrollTop: $("#technical").offset().top
    }, 1000);
});


   $("#use-click").click(function() {
    $('html, body').animate({
        scrollTop: $("#use").offset().top
    }, 1000);
});

	
});