'use strict';

/* HELPER: Checks Whether an Element Exists
----------------------------------------------------------------------------------------------------*/

 
$(window).scroll(function(){
    if ($(window).scrollTop() >= 80) {
        $('.wrapper-starbar .img-starbar').addClass('ani-mixo-3');
        $('.wrapper-starbar .img-logo').addClass('ani-mixo-2');
        $('.wrapper-starbar .content-text').addClass('ani-mixo-4');
    }               
});

$('.slide-starbar .owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    autoplay:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})
$('.slide-other .owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    dots:false,
    autoplay:true,
    responsive:{
        0:{
            items:2
        },
        600:{
            items:3
        },
        1000:{
            items:4
        }
    }
})