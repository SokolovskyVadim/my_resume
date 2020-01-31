jQuery(document).ready(function($) {  
    $(function() { 
        $('#loader').fadeOut();
        $('#preloader').delay(350).fadeOut('slow');
    }) 
});
jQuery(document).ready(function($) { 
    $(document).ready(function(){
        $(".smooth_menu").on("click","a", function (event) {
            event.preventDefault();
            var id  = $(this).attr('href'),
                top = $(id).offset().top;
            $('body,html').animate({scrollTop: top}, 1500);
        });
    });
});
// jQuery(document).ready(function($) {  
//     $(window).scroll(function() {
//         var height = $(window).scrollTop();
//         // var box1 = $('.about_me_block_wrapper').offset().top;
//         if(height > 300){
//         $('.photo-side-wrapper').addClass('slideInLeft');
//         } else{
//         $('.photo-side-wrapper').removeClass('slideInLeft');
//         }

//     });
// });
// jQuery(document).ready(function($) {  
//     $(window).scroll(function() {
//         var height = $(window).scrollTop();
//         // var box1 = $('.about_me_block_wrapper').offset().top;
//         if(height > 300){
//         $('.text-side').addClass('slideInRight');
//         } else{
//         $('.text-side').removeClass('slideInRight');
//         }

//     });
// });
// jQuery(document).ready(function($) {  
//     $(window).scroll(function() {
//         var height = $(window).scrollTop();
//         var box1 = $('.about_me_block_wrapper').offset().top;
//         if(height > 700){
//         $('.working_gif').addClass('zoomIn');
//         } else{
//         $('.working_gif').removeClass('zoomIn');
//         }

//     });
// });
// jQuery(document).ready(function($) {  
//     $(window).scroll(function() {
//         var height = $(window).scrollTop();
//         // var box1 = $('.about_me_block_wrapper').offset().top;
//         if(height > 900){
//         $('.card1').addClass('fadeIn');
//         } else{
//         $('.card1').removeClass('fadeIn');
//         }

//     });
// });
// jQuery(document).ready(function($) { 
//     $(document).ready(function() {
//         var windowHeight = $(window).height();
    
//         $(document).on('scroll', function() {
//             $('.card1').each(function() {
//                 var self = $(this),
//                 height;
//                 if (self.height() >= windowHeight) {
//                     height = self.offset().top + windowHeight - 100;
//                 } else {
//                     height = self.offset().top + self.height();
//                 }
//                 if ($(document).scrollTop() + windowHeight >= height) {
//                     self.addClass('fadeIn')
//                 } else {
//                     self.removeClass('fadeIn')
//                 }
//             });
//         });
//     });
// });
// jQuery(document).ready(function($) { 
//     $(document).ready(function() {
//         var windowHeight = $(window).height();
    
//         $(document).on('scroll', function() {
//             $('.card2').each(function() {
//                 var self = $(this),
//                 height;
//                 setTimeout(function(){  
//                     if (self.height() >= windowHeight) {
//                         height = self.offset().top + windowHeight - 100;
//                     } else {
//                         height = self.offset().top + self.height();
//                     }
//                     if ($(document).scrollTop() + windowHeight >= height) {
//                         self.addClass('fadeIn')
//                     } else {
//                         self.removeClass('fadeIn')
//                     }
//                 }, 1500);    
//             });
//         });
//     });
// });

// jQuery(document).ready(function($) {
//     $(window).scroll(function() {
//         var height = $(window).scrollTop();
//         // var box1 = $('.about_me_block_wrapper').offset().top;
//         setTimeout(function(){  
//             if(height > 900){
//             $('.card2').addClass('fadeIn');
//             } else{
//             $('.card2').removeClass('fadeIn');
//             }
//         }, 400);
//     }); 
// });
// jQuery(document).ready(function($) {
//     $(window).scroll(function() {
//         var height = $(window).scrollTop();
//         // var box1 = $('.about_me_block_wrapper').offset().top;
//         setTimeout(function(){  
//             if(height > 900){
//             $('.card3').addClass('fadeIn');
//             } else{
//             $('.card3').removeClass('fadeIn');
//             }
//         }, 800);
//     }); 
// });
// jQuery(document).ready(function($) {
//     $(window).scroll(function() {
//         var height = $(window).scrollTop();
//         // var box1 = $('.about_me_block_wrapper').offset().top;
//         setTimeout(function(){  
//             if(height > 900){
//             $('.card4').addClass('fadeIn');
//             } else{
//             $('.card4').removeClass('fadeIn');
//             }
//         }, 1200);
//     }); 
// });


jQuery(document).ready(function($) {
    $(window).bind('scroll',function(e){
        parallaxScroll();
    });
    function parallaxScroll(){
        var scrolled = $(window).scrollTop();
        $('.parralax-to-top-item').css('top',(0-(scrolled*.7))+'px');
        $('.parralax-to-top-item2').css('top',(0-(scrolled*.3))+'px');
        $('.parralax-to-top-item3').css('top',(0-(scrolled*.2))+'px');
        $('.parralax-to-top-item4').css('top',(0-(scrolled*.8))+'px');
    }
});

$(function(){
    $('.back').click(function(){
      $(this).addClass('card-back-back');
      $('.front').addClass('flipcard-wrap-back');
    });
    $('.front').hover(function(){
      $(this).removeClass('flipcard-wrap-back');
      $('.back').removeClass('card-back-back');
    });
  });


jQuery(document).ready(function($) {
  $(document).ready(function(){
    $('.bottom_slider').slick({
        dots: true,
        arrows: true,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        infinite: true,
        autoplaySpeed: 2000,
        responsive: [
            {
            breakpoint: 1024,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: true
            }
            },
            {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
            },
            {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
            }
        ]
    });
});
});