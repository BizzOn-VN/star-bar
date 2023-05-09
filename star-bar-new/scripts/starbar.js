
$( document ).ready(function() {
    $('.page-starbar .wrapper-starbar .img-starbar').addClass('ani-mixo-3');
        $('.page-starbar .wrapper-starbar .img-logo').addClass('ani-mixo-2');
        $('.page-starbar .wrapper-starbar .content-text').addClass('ani-mixo-4');
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
            items:2.2
        },
        600:{
            items:2.3
        },
        1000:{
            items:4
        }
    }
});
$('.md-slide-2 .owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    autoplay:true,
    nav:true,
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

$(".md-nav-tab .item span").click(function(){
   var cc_Sd = $(this).attr("data-href");
   $(".md-nav-tab .item span").removeClass("active");
   $(this).addClass("active");
   $(".md-content-tab").removeClass("active");
   $(cc_Sd).addClass("active");
});
$(".smd-nav-control span").click(function(){
    var sc89_jh= $(this).attr("data-href");
    $(".md-navbar .tab-pane").removeClass('active');
    $(sc89_jh).addClass("active");
});

$(".md-nav-tab-1 .item span").click(function(){
   var cc_Sd = $(this).attr("data-href");
   $(".md-nav-tab-1 .item span").removeClass("active");
   $(this).addClass("active");
   $(".md-content-tab-1").removeClass("active");
   $(cc_Sd).addClass("active");
});
$(".smd-nav-control-1 span").click(function(){
    var sc89_jh= $(this).attr("data-href");
    $(".md-navbar-1 .tab-pane").removeClass('active');
    $(sc89_jh).addClass("active");
});

$(document).ready(function() {
    
    var wrapper         = $(".input_fields_wrap"); //Fields wrapper
    var add_button      = $(".add_field_button"); //Add button ID
    
    
    $(add_button).click(function(e){ //on add input button click
        e.preventDefault();
        $(wrapper).append('<input type="text" />'); 
    });
    
    
});

// $("#modal-sucess").fancybox().trigger('click');