
$( document ).ready(function() {
    $('.page-starbar .wrapper-starbar .img-starbar').addClass('ani-mixo-3');
        $('.page-starbar .wrapper-starbar .img-logo').addClass('ani-mixo-2');
        $('.page-starbar .wrapper-starbar .content-text').addClass('ani-mixo-4');
});

$(window).scroll(function(){
    if ($(window).scrollTop() >= 100) {
        $('.slide-starbar .right-slide .img-right-slide').addClass('ani-right-slide');
        $('.slide-starbar .right-slide .img-bg-slide').addClass('ani-right-slide-2');
    }               
});

$('.slide-starbar .owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    // autoplay:true,
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
            items:2.5
        },
        600:{
            items:3.5
        },
        1000:{
            items:4
        }
    }
})