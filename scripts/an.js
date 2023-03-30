'use strict';

/* HELPER: Checks Whether an Element Exists
----------------------------------------------------------------------------------------------------*/

 function scrool_to_slider(){
  var window_width= $(window).width();
  if(window_width<768){
    $('html,body').animate({
            scrollTop: $(".wrapper-kham-pha").offset().top - 70
    }, 'slow');
  }
}

$(".share-khoanh-khac .info-gift .item ").hover(function(){
    $(".share-khoanh-khac .info-gift .item .info").removeClass("active");
    $(this).find(".info").addClass("active");
  }, function(){
    $(".share-khoanh-khac .info-gift .item .info").removeClass("active");
});



var hoverandclick=1;
 $(".blk-giao-bia-nhanh .inner").hover(function(){
   
   setTimeout(function(){
        
       $(".blk-giao-bia-nhanh .icon").css("left", "63%");
    }, 500);
   setTimeout(function(){
        
        hoverandclick=2;
    }, 1500);
   
   }, function(){
    setTimeout(function(){
        $(".blk-giao-bia-nhanh .icon").css("left", "5%");
     }, 500);
    
 });


function myFunction(){
  hoverandclick+=1;
   if(hoverandclick===2){
    setTimeout(function(){
        $(".blk-giao-bia-nhanh .icon").css("left", "63%");
     }, 700);

    }
    if(hoverandclick===3){
      $(".link-to").trigger('click');;
      hoverandclick=1;
      
      window.open("https://giaobianhanh.com/");
      
      setTimeout(function(){
        
        $(".blk-giao-bia-nhanh .icon").css("left", "5%");
    }, 1000);
    }
};

var SITE_URL = 'http://wowslider.com/';
var owl=$('.spr-slider .gglcs-slider').owlCarousel({
        items:1,
        nav:false,
        loop:true,
        dots:true,
        stagePadding:0,
        margin:0,
        // animateIn: 'zoomIn',
        URLhashListener:false,
        startPosition: 'URLHash',
        autoplayTimeout:3000,
        autoplay:true,
        autoplayHoverPause:true
    });
$(document).ready(function(){
    

    owl.on('changed.owl.carousel', function(event) {
       setTimeout(function(){


         // var activeEls = $('.owl-item.active').eq(1); // .eq(1) to get the "middle image out of 3 actives"
         var currentItem = $(".gglcs-slider .owl-item.active").find(".item").attr("data-hash");

          window.location.hash = currentItem ;
         // $(".spr-slider .owl-item").removeClass("target");
         var data_hash=$(".gglcs-slider .owl-item.active").find(".item").attr("data-hash");
         $(".spr-url-hash .item").removeClass("active");
         $("." + data_hash).addClass("active");

       },1);
     });

});
$(document).ready(function () {  
  $(".spr-url-hash .sanh-an a")[0].click();
}); 


$('.slider-syncing-3').owlCarousel({
  loop:true,
  margin:0,
  items:1,
  dots:false,
  nav:false,
  URLhashListener:true,
  // autoplay:true,
  // animateIn: 'rotateInDownLeft',
  
    autoplayTimeout:4000
})
$('.slider-syncing-4').owlCarousel({
  loop:true,
  margin:0,
  nav:true,
  items:1,
  dots:false,
  nav:true,
  center: true,
  animateIn: 'zoomIn',
  URLhashListener:true,
  // autoplay:true,
  autoplayTimeout:4000
})


   $(".select-videos-main .item").click(function(){
        var data_src_1=$(this).attr("data-src");
        $("#main-play").attr('src',data_src_1);

        // $('html,body').animate({
        //     scrollTop: $(".video-star-tv").offset().top
        // }, 'slow');
        $("#main-play")[0].src += "?autoplay=1";
        setTimeout(function(){ $("#yt").show(); }, 200);
        })

  $(".block-videos .thumb-nail").click(function(){
        $(".block-three-videos .col-md-4").removeClass("active");
        $(this).parent(".col-md-4").addClass("active");
        var data_src=$(this).attr("data-src");
        $("#main-play").attr('src',data_src);

        // $('html,body').animate({
        //     scrollTop: $(".video-star-tv").offset().top
        // }, 'slow');
        $("#main-play")[0].src += "?autoplay=1";
        setTimeout(function(){ $("#yt").show(); }, 200);
        })

 


var loopslider=0;

var deg=0;
$(".img-cube").click(function(){
  
  scrool_to_slider();
  
  // $(".blk-kham-pha").addClass("disabled");
  $(".click-rotate").addClass("disabled-click");
  $('.bg-cube').addClass('active-cube');
  setTimeout(function(){
     $('.bg-cube').removeClass('active-cube');
    }, 21000);
  // if(loopslider===0){
    setTimeout(function(){
      $(".slider-url-1").addClass("active-slider-url");
      $(".blk-whell").addClass("hidden");
      $(".share-khoanh-khac").addClass("hidden");
      

    //   $(".slider-url .inner-slider-url .item").removeClass("active");
    // $(".slider-url .inner-slider-url .data-hash-cold").addClass("active");
      // $(".slider").addClass("next-2");
      $(".slider-url-1 .item").removeClass("active");
      $(".slider-url-1 .data-hash-cold").addClass("active");

      // $(".slider-url .inner-slider-url .item").removeClass("active");
      // $(".slider-url .inner-slider-url .data-hash-clear").addClass("active");
      // $("#next").trigger('click');
    }, 1500);
    setTimeout(function(){
      $(".slider-url-1").addClass("active-slider-url");
      $(".blk-whell").addClass("hidden");
      $(".share-khoanh-khac").addClass("hidden");

      $(".slider-url .inner-slider-url .item").removeClass("active");
    $(".slider-url .inner-slider-url .data-hash-cold").addClass("active");
      // $("#next").trigger('click');
      $(".slider-url-1 .item").removeClass("active");
      $(".slider-url-1 .data-hash-cold").addClass("active");

      $(".slider-url .inner-slider-url .item").removeClass("active");
      $(".slider-url .inner-slider-url .data-hash-clear").addClass("active");
      deg -=100;

    }, 5000);
    setTimeout(function(){
      // $("#next").trigger('click');
      loopslider=1;
      $(".slider-url .inner-slider-url .item").removeClass("active");
      $(".slider-url .inner-slider-url .data-hash-creamy").addClass("active");
      // $(".image-rotate .img").css("transform","rotate(-270deg)");
      deg -=154;

    }, 12000);
    setTimeout(function(){
      // $("#next").trigger('click');
      loopslider=1;
      $(".slider-url .inner-slider-url .item").removeClass("active");
      $(".slider-url .inner-slider-url .data-hash-chuan3c").addClass("active");
      // $(".image-rotate .img").css("transform","rotate(-270deg)");
      deg -=154;

    }, 15000);
     setTimeout(function(){
      // $("#next").trigger('click');
      loopslider=1;
      $(".slider-url .inner-slider-url .item").removeClass("active");
      $(".slider-url .inner-slider-url .data-hash-cold").addClass("active");
      $(".share-khoanh-khac").removeClass("hidden")
      $(".slider-url-1").removeClass("active-slider-url");
      $(".button-click").removeClass("disabled");
      $(".blk-whell").removeClass("hidden");
      $(".click-rotate").removeClass("disabled-click");
      // $(".image-rotate .img").css("transform","rotate(0deg)");
      deg -=106;

    }, 18000);
    
})
$(document).ready(function(){
  "use strict";
  var offSetTop = 150;
  var $scrollToTopButton = $('.scrollToTop');
  //Check to see if the window is top if not then display button
  $(window).scroll(function(){
    if ($(this).scrollTop() > offSetTop) {
      $("#open-sapporo-nav").addClass("sticky_nav");
      $(".navbar").addClass("fixed-nav");
    } else {
      $("#open-sapporo-nav").removeClass("sticky_nav");
      $(".navbar").removeClass("fixed-nav");
    }
  });

  
});



function playVideo() {
        $('.video-blk-dt').get(0).play();
        
    }

function playVideomb() {
        $('.video-blk-mb').get(0).play();
        
    }
$('.img-cube').click(function(){
  $('.video-blk-right').css('z-index',999);
  setTimeout( function(){
    $('.video-blk-right').css('z-index',0);
       },21000);
    
});

$(window).scroll(function(){
    if ($(window).scrollTop() >= 80) {
        $('.wrapper-starbar .img-starbar').addClass('ani-mixo-3');
        $('.wrapper-starbar .img-logo').addClass('ani-mixo-2');
        $('.wrapper-starbar .content-text').addClass('ani-mixo-4');
    }               
});