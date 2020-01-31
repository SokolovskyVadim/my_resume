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
    $('.burger, .overlay').click(function(){
        $('.burger').toggleClass('clicked');
        $('.overlay').toggleClass('show');
        $('.nav-mobile').toggleClass('show');
        $('body').toggleClass('overflow');
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
jQuery(document).ready(function($) {
    $(window).scroll(function() {
        if ($(this).scrollTop()>=200) {
          // длительность анимации - 'slow'
          // тип анимации -  'linear'
          $('.desktop').addClass('active')
        }
        else {
          $('.desktop').removeClass('active');
        }
      });
});
jQuery(document).ready(function($) {
    $(".tab_item").not(":first").hide();
    $(".wrapper_tabs .tab").click(function() {
        $(".wrapper_tabs .tab").removeClass("active").eq($(this).index()).addClass("active");
        $(".tab_item").hide().eq($(this).index()).fadeIn()
    }).eq(0).addClass("active");
});
jQuery(document).ready(function($) {
    $(document).ready(function($) {
	$('.inter-number-button').click(function() {
		$('.thanks-number-modal').fadeIn();
		$('.give-number-modal').fadeOut();
		$('.give-number-modal-buy').fadeOut();
		return false;
    });
});	
jQuery(document).ready(function($) {	
	$('.close-thanks-number-modal').click(function() {
		$(this).parents('.thanks-number-modal').fadeOut();
		return false;
	});		 
	$(document).keydown(function(e) {
		if (e.keyCode === 27) {
			e.stopPropagation();
			$('.thanks-number-modal').fadeOut();
		}
	});	
	$('.thanks-number-modal').click(function(e) {
		if ($(e.target).closest('.thanks-number-modal-in').length == 0) {
			$(this).fadeOut();					
		}
	});
  });
});	 
jQuery(document).ready(function($) {	 
  $(document).ready(function($) {
	$('.give-number-modal-open-buy').click(function() {
		$('.give-number-modal-buy').fadeIn();
		return false;
	});		
	$('.close-give-number-modal-buy').click(function() {
		$(this).parents('.give-number-modal-buy').fadeOut();
		return false;
	});		 
	$(document).keydown(function(e) {
		if (e.keyCode === 27) {
			e.stopPropagation();
			$('.give-number-modal-buy').fadeOut();
		}
	});
	$('.give-number-modal-buy').click(function(e) {
		if ($(e.target).closest('.give-number-modal-in-buy').length == 0) {
			$(this).fadeOut();					
		}
	});
  });
});	
jQuery(document).ready(function($) {
    $(document).ready(function () {
        $(window).scroll(function () {
            if ($(this).scrollTop() > 100) {
                $('.scrollup').fadeIn();
            } else {
                $('.scrollup').fadeOut();
            }
        });
        $('.scrollup').click(function () {
            $("html, body").animate({ scrollTop: 0 }, 600);
            return false;
        });
    });
});	
jQuery(document).ready(function($) {
    $(document).ready(function () {
        $('.scrollup-fixed').click(function () {
            $("html, body").animate({ scrollTop: 0 }, 600);
            return false;
        });
    });
});	
jQuery(document).ready(function($) {
    var window_width = $(window).width();    
    $(window).scroll(function () { 
        var scroll_position = $(window).scrollTop();
        var object_position_left = (scroll_position / 2.5)*(scroll_position/window_width);
        $('#object').css({'right':object_position_left});
    });
});	