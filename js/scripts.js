/*====================================*
    01. HEADER MENU JS
*=====================================*/ 

    $(window).on('scroll', function() {
        var scroll = $(window).scrollTop();

        if (scroll >= 150) {
            $('header').addClass('nav-fixed');
        } else {
            $('header').removeClass('nav-fixed');
        }
    });

    $('.checkbtn').on('click', function() {
        $('body').toggleClass('menu-open');
    });

/*====================================*
    02. AUTO CLOSE NAVBAR JS
*=====================================*/

    $('.navbar-collapse a').click(function() {
        $(".navbar-collapse").collapse('hide');
    });

/*====================================*
    03. VIDEO JS
*=====================================*/ 

    $(document).ready(function() {
        $('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
            disableOn: 700,
            type: 'iframe',
            mainClass: 'mfp-fade',
            removalDelay: 160,
            preloader: false,

            fixedContentPos: false
        });
    });

/*====================================*
    04. OWL-CAROUSEL JS
*=====================================*/ 

    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        nav:false,
        autoplay:true,
        dots:false,
        responsive:{
            0:{
                items:2
            },

            600:{
                items:3
            },
            900:{
                items:4
            },
            1200:{
                items:5
            }
        }
    })


/*====================================*
    05. SCROLLUP JS
*=====================================*/ 

    $(document).ready(function(){ 
        $(window).scroll(function(){ 
            if ($(this).scrollTop() > 100) { 
                $('.scrollup').fadeIn(); 
            } else { 
                $('.scrollup').fadeOut(); 
            } 
        }); 
        $('.scrollup').click(function(){ 
            $("html, body").animate({ scrollTop: 0 }, 1700); 
            return false; 
        }); 
    });

/*====================================*
    06. SMOOTH PAGE SCROLLING JS
*=====================================*/

    var $root = $('html, body');

    $('.navbar-nav a[href^="#"]').click(function () {
        $root.animate({
            scrollTop: $( $.attr(this, 'href') ).offset().top
        }, 1500);

        return false;
    });
