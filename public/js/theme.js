/*-----------------------------------------------------------------------------------

Template Name: Prolanding Apps Landing Template
Template URI: 
Description: This is html5 Apps Landing Template
Author: ThemeInnovation
Author URI: https://themeforest.net/user/themeinnovation/portfolio
Version: 1.0

-----------------------------------------------------------------------------------*/

//   js index
/* =================== */
/*  
    1. Prealoader
    2. Sidebar Navigation
    3. Headroom js Activation
    4. Effect On Slider Text
    5. Wordpress Friendly Menu
    6. Headline type writter
    7. Active current menu while scrolling
    8. Smoth Scroll
    9. Testemonial Carousel
    10. h2-testimonial activation
    11. Full Screen Slider
    12. Screen View Slider
    13. Window Scroll Function Start
        13.1 feature fade animation
        13.2 add class on scrollup-btn
        13.3 pricing area custome animation
        13.4 Parallax background
        13.5 svg animated
    14. Magnific Popup Activation
    15. Ytp Background video
    16. SlickNav menu Activation
    17. blog post social share btn show hide
*/
// -----------------------------


(function($) {
    "use strict";


    //=========================
    // 1. Prealoader
    //=========================
    $(window).on('load', function() {
        $('#preloader').delay(200).fadeOut('slow', function() { $(this).remove(); });
    });


    /*------------------------------
      2. Sidebar Navigation
    -------------------------------- */
    var hidden = 'is-hidden';
    var vissible = 'is-vissible';
    var overlay = $('.overlay');
    var sidebar_menu = $('.sidebar-menu');


    overlay.addClass(hidden);
    $('.open-sidebar').on('click', function() {
        sidebar_menu.addClass(vissible);
        overlay.removeClass(hidden);
    });

    $('.nav-close').on('click', function() {
        sidebar_menu.removeClass(vissible);
        overlay.addClass(hidden);
    });

    overlay.on('click', function() {
        sidebar_menu.removeClass(vissible);
        overlay.addClass(hidden);
    });


    //=========================
    // 3. Headroom js Activation
    //=========================
    function headroom_activation() {
        var myElement = document.querySelector(".header-area");
        // construct an instance of Headroom, passing the element
        var headroom = new Headroom(myElement);
        // initialise
        headroom.init();
    }
    // if hav this class
    if ($('.header-area').length) {
        headroom_activation();
    }

    //=========================
    // 4. Effect On Slider Text
    //=========================
    $(window).on('load', function() {
        var animation_fadeup = 'animated fadeInUp';
        $('.slider-text .headline').addClass(animation_fadeup);
        $('.slider-text  h2').addClass(animation_fadeup);
        $('.slider-text p').addClass(animation_fadeup);
        $('.slider-text .slide-action').addClass(animation_fadeup);
    });


    //=========================
    // 5. Wordpress Friendly Menu
    //=========================
    $(window).on('resize', function() {
        var wWidth = $(this).width();

        var selectedMenu = $('.main-menu');
        var submenu = 'submenu';
        var menu_has_child = 'menu-item-has-children';
        var has_submenu = 'has-submenu';
        var menu_activated = 'menu-activated';
        var prc_area = 'prc-area';

        var menu_ac_sub = $('.menu-activated >nav >ul >li ul');
        var menu_ac_has_child = $('.menu-activated >nav >ul >li ul li:has(ul)');
        var menu_ac_has_sub = $('.menu-activated >nav >ul >li:has(ul)');

        if (wWidth > 991) {
            selectedMenu.addClass(menu_activated);
            menu_ac_sub.addClass(submenu);
            menu_ac_has_child.addClass(menu_has_child);
            menu_ac_has_sub.addClass(has_submenu);
            $('.prc-anim').addClass(prc_area);

        } else {
            menu_ac_sub.removeClass(submenu);
            menu_ac_has_child.removeClass(menu_has_child);
            menu_ac_has_sub.removeClass(has_submenu);
            selectedMenu.removeClass(menu_activated);
            $('.prc-anim').removeClass(prc_area);

            $('.feature-item-area .left-feature').removeClass('left-feature');
        }

    }).resize();

    //=========================
    // 6. Headline type writter
    //=========================
    $('.headline').animatedHeadline({
        animationType: "clip",
        animationDelay: 3000,
        barAnimationDelay: 3800,
        barWaiting: 800,
        lettersDelay: 50,
        typeLettersDelay: 150,
        selectionDuration: 500,
        typeAnimationDelay: 1300,
        revealDuration: 300,
        revealAnimationDelay: 2000
    });

    //=========================
    // 7. Active current menu while scrolling
    //=========================

    //ACTIVE CURRENT MENU WHILE SCROLLING

    $(window).on("scroll", function() {

        activeMenuItem($(".nav-menu"));

    });

    // function for active menuitem
    function activeMenuItem($links) {
        var top = $(window).scrollTop(),
            windowHeight = $(window).height(),
            documentHeight = $(document).height(),
            cur_pos = top + 2,
            sections = $("section"),
            nav = $links,
            nav_height = nav.outerHeight(),
            home = nav.find(" > ul > li:first");


        sections.each(function() {
            var top = $(this).offset().top - nav_height - 40,
                bottom = top + $(this).outerHeight();

            if (cur_pos >= top && cur_pos <= bottom) {
                nav.find("> ul > li > a").parent().removeClass("active");
                nav.find("a[href='#" + $(this).attr('id') + "']").parent().addClass("active");
            } else if (cur_pos === 2) {
                nav.find("> ul > li > a").parent().removeClass("active");
                home.addClass("active");
            } else if ($(window).scrollTop() + windowHeight > documentHeight - 400) {
                nav.find("> ul > li > a").parent().removeClass("active");
            }
        });
    }
    //=========================
    // 8. Smoth Scroll
    //=========================

    function smoothScrolling($links, $topGap) {
        var links = $links;
        var topGap = $topGap;

        links.on("click", function() {
            if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {
                var target = $(this.hash);
                target = target.length ? target : $("[name=" + this.hash.slice(1) + "]");
                if (target.length) {
                    $("html, body").animate({
                        scrollTop: target.offset().top - topGap
                    }, 1000, "easeInOutExpo");
                    return false;
                }
            }
            return false;
        });
    }

    $(window).on("load", function() {
        smoothScrolling($(".main_nav_menu > nav > ul > li > a[href^='#']"), 70);
        smoothScrolling($(".sidebar_menu > nav > ul > li > a[href^='#']"), 0);
        smoothScrolling($(".scroller[href^='#']"), 0);
    });

    //=========================
    // 9. Testemonial Carousel
    //=========================
    function testimonials() {
        var owl = $(".testimonials");
        owl.owlCarousel({
            loop: true,
            // margin:20,
            responsiveClass: true,
            navigation: true,
            nav: true,
            items: 1,
            smartSpeed: 2000,
            dots: true,
            autoplay: false,
            autoplayTimeout: 4000,
            center: true,
            responsive: {
                0: {
                    items: 1
                },
                480: {
                    items: 1
                },
                760: {
                    items: 1
                }
            }
        });
    }
    testimonials();

    //=========================
    // 10. h2-testimonial activation
    //=========================
    function h2_testimonial() {
        var owl = $(".h2-testimonial");
        owl.owlCarousel({
            loop: true,
            // margin:20,
            responsiveClass: true,
            navigation: true,
            nav: true,
            items: 3,
            mouseDrag: true,
            smartSpeed: 2000,
            dots: false,
            autoplay: false,
            autoplayTimeout: 4000,
            center: true,
            responsive: {
                0: {
                    items: 1
                },
                480: {
                    items: 1
                },
                760: {
                    items: 3
                }
            }
        });
    }
    h2_testimonial();

    //=========================
    // 11. Full Screen Slider
    //=========================
    function full_screen_slider() {
        var owl = $(".full_screen_slider");
        owl.owlCarousel({
            loop: true,
            margin: 0,
            responsiveClass: true,
            navigation: true,
            nav: true,
            navText: ['<span class="ti-angle-left"></span>', '<span class="ti-angle-right"></span>'],
            items: 1,
            dots: false,
            autoplay: false,
            // animateIn: 'fadeIn',
            // animateOut: 'fadeOut',
            center: true,
            responsive: {
                0: {
                    items: 1
                },
                480: {
                    items: 1
                },
                760: {
                    items: 1
                }
            }
        });
    }
    full_screen_slider();


    //=========================
    // 12. Screen View Slider
    //=========================
    function screen__view__slider() {
        var owl = $(".screen__view__slider");
        owl.owlCarousel({
            loop: true,
            margin:0,
            responsiveClass: true,
            navigation: true,
            nav: true,
            navText: ['<span class="ti-angle-left"></span>', '<span class="ti-angle-right"></span>'],
            items: 5,
            mouseDrag: true,
            smartSpeed: 1000,
            dots: false,
            autoplay: true,
            autoplayTimeout: 4000,
            center: true,
            responsive: {
                0: {
                    items: 1
                },
                480: {
                    items: 3
                },
                760: {
                    items: 3
                },

                1200: {
                    items: 5
                }
            }
        });
    }
    screen__view__slider();
    // nav,mouseDrag dissableing on mobile device
    $(window).on('resize', function(){
        var window_widht = $('window').width();
        if (window_widht < 480) {

            var owl = $(".screen__view__slider");
            owl.owlCarousel({
                navigation: false,
                nav: false,
                mouseDrag: true
            });
        }
    }).resize();

    //==================================
    // 13. Window Scroll Function Start
    //==================================

    $(window).on('scroll', function() {

        var wScroll = $(this).scrollTop();

        /*------------------------------
          13.1 feature fade animation
        -------------------------------- */
        function feature_effect() {
            var left_feature = $('.feature-item-area .left-feature');
            var right_feature = $('.feature-item-area .right-feature');
            var middle_item = $('.feature-item-area .middle-item');


            if (wScroll > left_feature.offset().top - ($(window).height() / 1)) {
                left_feature.addClass('animated fadeInRight');
            }
            if (wScroll > right_feature.offset().top - ($(window).height() / 1.5)) {
                right_feature.addClass('animated fadeInLeft');
            }
            if (wScroll > middle_item.offset().top - ($(window).height() / 1.5)) {
                middle_item.addClass('animated fadeInUp');
            }
        }
        // feature effect only on desktop
        if ($('.left-feature').length) {
            feature_effect();
        }

        /*------------------------------
          13.2 add class on scrollup-btn
        -------------------------------- */
        var popinmescrl = 'popinmescrl';
        var scrollup__btn = $('.scrollup__btn');

        if (wScroll > 150) {
            scrollup__btn.addClass(popinmescrl);
        } else {
            scrollup__btn.removeClass(popinmescrl);
        }

        /*-------------------------------------
          13.3 pricing area custome animation
        --------------------------------------- */
        var prc_area_class = $('.prc-area');
        if (prc_area_class.length) {
            pric_anim();
        }

        function pric_anim() {
            if (wScroll > prc_area_class.offset().top - $(window).height()) {

                var offset = (Math.min(0, wScroll - $('.prc-area').offset().top + $(window).height() - 300)).toFixed();

                $('.prc-1').css({ 'transform': 'translate(' + offset + 'px, ' + Math.abs(offset * 0.2) + 'px)' });

                $('.prc-3').css({ 'transform': 'translate(' + Math.abs(offset) + 'px, ' + Math.abs(offset * 0.2) + 'px)' });

            }
        }

        /*------------------------------
          13.4 Parallax background
        -------------------------------- */

        function bgParallax() {
            if ($(".parallax").length) {
                $(".parallax").each(function() {
                    var height = $(this).position().top;
                    var resize = height - $(window).scrollTop();
                    var parallaxSpeed = $(this).data("speed");
                    var doParallax = -(resize / parallaxSpeed);
                    var positionValue = doParallax + "px";
                    var img = $(this).data("bg-image");

                    $(this).css({
                        backgroundImage: "url(" + img + ")",
                        backgroundPosition: "50%" + positionValue,
                        backgroundSize: "cover",
                    });

                    if (window.innerWidth < 768) {
                        $(this).css({
                            backgroundPosition: "center center"
                        });
                    }
                });
            }
        }
        bgParallax();
        
        /*----------------------------------
          13.5 svg animated
         -----------------------------------*/
         var meta_icon = $('.meta-icon');
        if (meta_icon.length) {
            svg_animation();
        }

        function svg_animation() {
            if (wScroll > meta_icon.offset().top - ($(window).height() / 1.3)) {
                meta_icon.addClass('is__animate');
            }
        }

    }); //Window Scroll Function END

    //==============================
    // 14. Magnific Popup Activation
    //==============================
    $('.video-link').magnificPopup({
        type: 'iframe',
        iframe: {
            youtube: {
                index: 'youtube.com/', // String that detects type of video (in this case YouTube). Simply via url.indexOf(index).

                id: 'v=', // String that splits URL in a two parts, second part should be %id%
                // Or null - full URL will be returned
                // Or a function that should return %id%, for example:
                // id: function(url) { return 'parsed id'; }

                src: '//www.youtube.com/embed/%id%?autoplay=1' // URL that will be set as a source for iframe.
            }
        }
    });

    //==============================
    // 15. Ytp Background video
    //==============================
    $(".slider-bg").mb_YTPlayer();

    //==============================
    // 16. SlickNav menu Activation
    //==============================
    $('ul#mobile_menu').slicknav({
        'appendTo': '.responsive-menu-wrap',
        'label': 'MENU',
    });


    //=========================================
    // 17. blog post social share btn show hide
    //=========================================
    var show_hide_social = 'show_hide_social';
    var post__share_btns = $('.post__share_btns');
    // add class on mouse hover
    $(".readmore_and_share a.share").on('mouseover', function(){
        $(this).next(post__share_btns).addClass(show_hide_social);
    });
    // remove class on mouse out
    $('.readmore_and_share').on('mouseleave', function() {
       $(post__share_btns).removeClass(show_hide_social);
    });

}(jQuery));