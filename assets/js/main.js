jQuery(function($){
    'use strict';

    //Navbar
    $(window).on('scroll', function() {
        if ($(this).scrollTop() >50) {
            $('.main-menu').addClass('is-sticky');
        } else {
            $('.main-menu').removeClass('is-sticky');
        }
    });		

    $('navbar-nav .nav-item .nav-link').on('click', function(e){
        var anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $(anchor.attr('href')).offset().top - 30
        }, 1500);
        e.preventDefault();
    });
    $(document).on('click','.navbar-collapse.show',function(e) {
        if( $(e.target).is('a') && $(e.target).attr('class') != 'dropdown-toggle' ) {
            $(this).collapse('hide');
        }
    });	

    //Company Slider
    $('.company-slider').owlCarousel({
        loop:true,
        nav:false,
        dots: false,
        autoplay: false,
        margin:20,
        autoplayTimeout: 1500,
        autoplayHoverPause: true,
        smartSpeed:800,
        responsive:{
            0:{
                items:1,
            },
            768:{
                items:3,
            },
            1000:{
                items:5,
            }
        }
    })
});
