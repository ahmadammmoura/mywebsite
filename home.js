let spinnerWrapper = document.querySelector('.spinner-wrapper');

    window.addEventListener('load', function () {
        // spinnerWrapper.style.display = 'none';
        spinnerWrapper.parentElement.removeChild(spinnerWrapper);
    });


$(document).ready(function(){
    $('.menu-toggler').on('click',function(){
        $(this).toggleClass('open');
        $('.top-nav').toggleClass('open');


    });

    $('.top-nav .nav-link').on('click',function(){
        $('.menu-toggler').removeClass('open');
        $('.top-nav').removeClass('open');


    });

    

});
AOS.init({
    once:true
});

function scrollTopAnimated() { 
    $("html, body").animate({ scrollTop: "0" },2000); 
    
}

$("a[href^='#']").click(function(e) {
	e.preventDefault();
	
	var position = $($(this).attr("href")).offset().top;

	$("body, html").animate({
		scrollTop: position
	}, 2000 );
});