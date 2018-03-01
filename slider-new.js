$(document).ready(function(){      
    $('.safeDelivery-carousel').slick({
        autoplay: true,
        autoplaySpeed: 10000,
        arrows: true,
        prevArrow: '<button class="slick-prev slick-arrow" type="button"><span class="icon-chevron-thin-left"></div></button>',
        nextArrow: '<button class="slick-next slick-arrow" type="button"><span class="icon-chevron-thin-right"></div></button>'
    });
    carouselArrowHide: function() {
      	$('.safeDelivery-carousel').mouseenter(function() {
            $('span.icon-chevron-thin-left').fadeIn();
            $('span.icon-chevron-thin-right').fadeIn();
        }).mouseleave(function(){
            $('span.icon-chevron-thin-left').fadeOut();
            $('span.icon-chevron-thin-right').fadeOut(); 
        });                 
    },
    var scroll = new SmoothScroll('a[href*="#"]', {
        speed: 800, 
        offset: 100
    });
});




    
        

            
            
                
            
                
            
        
     
	




