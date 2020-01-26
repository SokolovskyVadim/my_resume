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
jQuery(document).ready(function($) {  
    $(window).scroll(function() {
        var height = $(window).scrollTop();
        // var box1 = $('.about_me_block_wrapper').offset().top;
        if(height > 300){
        $('.photo-side-wrapper').addClass('slideInLeft');
        } else{
        $('.photo-side-wrapper').removeClass('slideInLeft');
        }

    });
});
jQuery(document).ready(function($) {  
    $(window).scroll(function() {
        var height = $(window).scrollTop();
        // var box1 = $('.about_me_block_wrapper').offset().top;
        if(height > 300){
        $('.text-side').addClass('slideInRight');
        } else{
        $('.text-side').removeClass('slideInRight');
        }

    });
});
jQuery(document).ready(function($) {  
    $(window).scroll(function() {
        var height = $(window).scrollTop();
        // var box1 = $('.about_me_block_wrapper').offset().top;
        if(height > 700){
        $('.working_gif').addClass('zoomIn');
        } else{
        $('.working_gif').removeClass('zoomIn');
        }

    });
});
jQuery(document).ready(function($) {  
    $(window).scroll(function() {
        var height = $(window).scrollTop();
        // var box1 = $('.about_me_block_wrapper').offset().top;
        if(height > 900){
        $('.card1').addClass('fadeIn');
        } else{
        $('.card1').removeClass('fadeIn');
        }

    });
});
jQuery(document).ready(function($) {
    $(window).scroll(function() {
        var height = $(window).scrollTop();
        // var box1 = $('.about_me_block_wrapper').offset().top;
        setTimeout(function(){  
            if(height > 900){
            $('.card2').addClass('fadeIn');
            } else{
            $('.card2').removeClass('fadeIn');
            }
        }, 400);
    }); 
});
jQuery(document).ready(function($) {
    $(window).scroll(function() {
        var height = $(window).scrollTop();
        // var box1 = $('.about_me_block_wrapper').offset().top;
        setTimeout(function(){  
            if(height > 900){
            $('.card3').addClass('fadeIn');
            } else{
            $('.card3').removeClass('fadeIn');
            }
        }, 800);
    }); 
});
jQuery(document).ready(function($) {
    $(window).scroll(function() {
        var height = $(window).scrollTop();
        // var box1 = $('.about_me_block_wrapper').offset().top;
        setTimeout(function(){  
            if(height > 900){
            $('.card4').addClass('fadeIn');
            } else{
            $('.card4').removeClass('fadeIn');
            }
        }, 1200);
    }); 
});
jQuery(document).ready(function($) {  
    $(window).scroll(function() {
        var height = $(window).scrollTop();
        // var box1 = $('.about_me_block_wrapper').offset().top;
        if(height > 900){
        $('.card1').addClass('fadeIn');
        } else{
        $('.card1').removeClass('fadeIn');
        }

    });
});



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
jQuery(document).ready(function($) {
    $('.card').click(function(){
        $(this).toggleClass('flipped');
    });
});

jQuery(document).ready(function($) {
    $(".fancybox").fancybox({
        beforeShow : function() {
            var alt = this.element.find('img').attr('alt');
            
            this.inner.find('img').attr('alt', alt);
            
            this.title = alt;
        }
    });
});
