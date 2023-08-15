/*--------------------------
   Project Name: Startus
   Version: 1.0
   Author: 7oorof
   Devloped by: Ahmed Abdallah (a.abdallah999@gmail.com)
   Relase Date: April 2020
---------------------------*/
/*---------------------------
      Table of Contents
    --------------------
    
    01- Mobile Menu
    02- Sticky Navbar
    03- Open and Close Popup
    04- Scroll Top Button
    06- Set Background-img to section 
    07- Increase and Decrease Input Value
    08- Add active class to accordions
    09- CLose Contact Panel
    10- Load More Items
    11- Progress bars
    12- Owl Carousel
    13- Popup Video
    14- CounterUp
    15- Products Filtering and Sorting
    16- image zoomsl Plugin 
    17- Range Slider 
    
 ----------------------------*/

$(function () {

    // Global variables
    var $win = $(window);

    /*==========   Mobile Menu   ==========*/
    var $navToggler = $('.navbar-toggler');
    $navToggler.on('click', function () {
        $(this).toggleClass('actived');
    })
    $navToggler.on('click', function () {
        $('.navbar-collapse').toggleClass('menu-opened');
    })

    // Toggle dropdown Menu in Mobile
    $('.dropdown-menu [data-toggle=dropdown]').on('click', function (e) {
        e.stopPropagation();
        e.preventDefault();
        $(this).parent().siblings().removeClass("opened");
        $(this).parent().toggleClass("opened");
    });
    $('.dropdown-submenu [data-toggle=dropdown]').on('click', function (e) {
        $(this).next().toggleClass("show");
        $(this).parent().siblings().find('.dropdown-menu').removeClass('show');
    });

    /*==========   Sticky Navbar   ==========*/
    $win.on('scroll', function () {
        if ($win.width() >= 992) {
            var $navbar = $('.navbar');
            if ($win.scrollTop() > 200) {
                $navbar.addClass('fixed-navbar');
            } else {
                $navbar.removeClass('fixed-navbar');
            }
        }
    });


    /*==========  Open and Close Popup   ==========*/
    // open Popup
    function openPopup(popupTriggerBtn, popup, addedClass, removedClass) {
        $(popupTriggerBtn).on('click', function (e) {
            e.preventDefault();
            $(popup).toggleClass(addedClass, removedClass).removeClass(removedClass);
        });
    }
    // Close Popup
    function closePopup(closeBtn, popup, addedClass, removedClass) {
        $(closeBtn).on('click', function () {
            $(popup).removeClass(addedClass).addClass(removedClass);
        });
    }
    // close popup when clicking on an other place on the Document
    function closePopupFromOutside(popup, stopPropogationElement, popupTriggerBtn, removedClass, addedClass) {
        $(document).on('mouseup', function (e) {
            if (!$(stopPropogationElement).is(e.target) && !$(popupTriggerBtn).is(e.target) && $(stopPropogationElement).has(e.target).length === 0 && $(popup).has(e.target).length === 0) {
                $(popup).removeClass(removedClass).addClass(addedClass);
            }
        });
    }

    openPopup('.action__btn-search', '.search-popup', 'active', 'inActive') // Open Search popup
    closePopup('.search__popup-close', '.search-popup', 'active', 'inActive') // Close Search popup
    openPopup('.action__btn-humburgerMenu', '.hamburger-menu', 'active', 'inActive') // Open sidenav popup
    closePopup('.hamburger__menu-close', '.hamburger-menu', 'active', 'inActive') // Close sidenav popup
    openPopup('.action__btn-cart', '.cart-popup', 'active', 'inActive') // Open Search popup
    closePopupFromOutside('.cart-popup', '.cart-popup', '.action__btn-cart', 'active');  // close popup when clicking on an other place on the Document
    openPopup('.action__btn-menuPopup', '.menu-popup', 'active', 'inActive') // Open menu-popup
    closePopup('.menu-popup__close', '.menu-popup', 'active', 'inActive') // Close menu-popup


    /*==========   Scroll Top Button   ==========*/
    var $scrollTopBtn = $('#scrollTopBtn');
    // Show Scroll Top Button
    $win.on('scroll', function () {
        if ($(this).scrollTop() > 700) {
            $scrollTopBtn.addClass('actived');
        } else {
            $scrollTopBtn.removeClass('actived');
        }
    });
    // Animate Body after Clicking on Scroll Top Button
    $scrollTopBtn.on('click', function () {
        $('html, body').animate({
            scrollTop: 0
        }, 500);
    });

    /*==========   Set Background-img to section   ==========*/
    $('.bg-img').each(function () {
        var imgSrc = $(this).children('img').attr('src');
        $(this).parent().css({
            'background-image': 'url(' + imgSrc + ')',
            'background-size': 'cover',
            'background-position': 'center',
        });
        $(this).parent().addClass('bg-img');
        $(this).remove();
    });

    /*==========   Increase and Decrease Input Value   ==========*/
    // Increase Value
    $('.increase-qty').on('click', function () {
        var $qty = $(this).parent().find('.qty-input');
        var currentVal = parseInt($qty.val());
        if (!isNaN(currentVal)) {
            $qty.val(currentVal + 1);
        }
    });
    // Decrease Value
    $('.decrease-qty').on('click', function () {
        var $qty = $(this).parent().find('.qty-input');
        var currentVal = parseInt($qty.val());
        if (!isNaN(currentVal) && currentVal > 1) {
            $qty.val(currentVal - 1);
        }
    });

    /*==========   Add active class to accordions   ==========*/
    $('.accordion__item-header').on('click', function () {
        $(this).addClass('opened')
        $(this).parent().siblings().find('.accordion__item-header').removeClass('opened')
    })
    $('.accordion__item-title').on('click', function (e) {
        e.preventDefault()
    });

    /*==========   Load More Items  ==========*/
    function loadMore(loadMoreBtn, loadedItem) {
        $(loadMoreBtn).on('click', function (e) {
            e.preventDefault();
            $(this).fadeOut();
            $(loadedItem).fadeIn();
        })
    }
    loadMore('#loadMorePortfolio', '.portfolio-hidden > .portfolio-item'); // Load More Items when Click on load More Button

    /*============ CLose Contact Panel  ===========*/
    $('.close-contact-panel').on('click', function () {
        $(this).closest('.contact-panel').fadeOut();
    });

    /*==========   Progress bars  ==========*/
    if ($(".animated-Progressbars").length > 0) {
        $(window).on('scroll', function () {
            var skillsOffset = $(".animated-Progressbars").offset().top - 130,
                skillsHight = $(this).outerHeight(),
                winScrollTop = $(window).scrollTop();
            if (winScrollTop > skillsOffset - 1 && winScrollTop < skillsOffset + skillsHight - 1) {
                $('.progress-bar').each(function () {
                    $(this).width($(this).attr('aria-valuenow') + '%');
                });
                $('.progress__percentage').each(function () {
                    $(this).text($(this).parent('.progress-bar').attr('aria-valuenow') + '%')
                });
            }
        });
    }

    /*==========   Owl Carousel  ==========*/
    $('.carousel').each(function () {
        $(this).owlCarousel({
            nav: $(this).data('nav'),
            dots: $(this).data('dots'),
            loop: $(this).data('loop'),
            margin: $(this).data('space'),
            center: $(this).data('center'),
            dotsSpeed: $(this).data('speed'),
            autoplay: $(this).data('autoplay'),
            transitionStyle: $(this).data('transition'),
            animateOut: $(this).data('animate-out'),
            animateIn: $(this).data('animate-in'),
            autoplayTimeout: 15000,
            responsive: {
                0: {
                    items: 1,
                },
                400: {
                    items: $(this).data('slide-sm'),
                },
                700: {
                    items: $(this).data('slide-md'),
                },
                1000: {
                    items: $(this).data('slide'),
                }
            }
        });
    });
    // Owl Carousel With Thumbnails
    $('.thumbs-carousel').owlCarousel({
        thumbs: true,
        thumbsPrerendered: true,
        loop: true,
        margin: 0,
        autoplay: $(this).data('autoplay'),
        nav: $(this).data('nav'),
        dots: $(this).data('dots'),
        dotsSpeed: $(this).data('speed'),
        transitionStyle: $(this).data('transition'),
        animateOut: $(this).data('animate-out'),
        animateIn: $(this).data('animate-in'),
        autoplayTimeout: 15000,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    });

    /*==========  Popup Video  ==========*/
    $('.popup-video').magnificPopup({
        mainClass: 'mfp-fade',
        preloader: false,
        fixedContentPos: false,
        removalDelay: 0,
        type: 'iframe',
        iframe: {
            markup: '<div class="mfp-iframe-scaler">' +
                '<div class="mfp-close"></div>' +
                '<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>' +
                '</div>',
            patterns: {
                youtube: {
                    index: 'youtube.com/',
                    id: 'v=',
                    src: '//www.youtube.com/embed/%id%?autoplay=1'
                }
            },
            srcAction: 'iframe_src',
        }
    });

    $('.popup-gallery-item').magnificPopup({
        type: 'image',
        tLoading: 'Loading image #%curr%...',
        mainClass: 'mfp-img-mobile',
        gallery: {
            enabled: true,
            navigateByImgClick: true,
            preload: [0, 1]
        },
        image: {
            tError: '<a href="%url%">The image #%curr%</a> could not be loaded.'
        }
    });

    /*==========   counterUp  ==========*/
    $('.counter').counterUp({
        delay: 10,
        time: 4000
    });

    /*==========   Products Filtering and Sorting  ==========*/
    $("#filtered-items-wrap").mixItUp();
    $(".portfolio-filter li a").on('click', function (e) {
        e.preventDefault();
    });

    /*==========   Range Slider  ==========*/
    var $rangeSlider = $("#rangeSlider"),
        $rangeSliderResult = $("#rangeSliderResult");
    $rangeSlider.slider({
        range: true,
        min: 0,
        max: 300,
        values: [50, 200],
        slide: function (event, ui) {
            $rangeSliderResult.val("$" + ui.values[0] + " - $" + ui.values[1]);
        }
    });
    $rangeSliderResult.val("$" + $rangeSlider.slider("values", 0) + " - $" + $rangeSlider.slider("values", 1));

    /*==========  image zoomsl Plugin  ==========*/
    // [Zoom Effect on Hovering] Find it in shop-single-product.html
    $(".zoomin").imagezoomsl();
});