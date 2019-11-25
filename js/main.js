$(document).ready(function () {
    "use strict";
    BodyFadeIn();
    BackToTop();
});
//  ----- Load Component  -------//

function BodyFadeIn() {
    // $("body").hide();
    // $("body").fadeIn(1000);
    // $('body').css('display', 'none');
    // $('body').fadeIn(1000);
}

//  ----- Load Component  -------//

// Load Header
fetch("./assets/component/nav-header.html", ).then(
    response => {
        return response.text()
    }).then(
    data => {
        document.querySelector("sr-nav-header").innerHTML = data;
        flexMenu();
        ContactSideMenuPanel();
        HideShowHeader();
        HeaderSection();
    }).catch(
    error => console.log('error is', error)
);

// Load Side Menu
fetch("./assets/component/side-menu.html").then(
    response => {
        return response.text()
    }).then(
    data => {
        document.querySelector("sr-side-menu").innerHTML = data;
        ContactSideMenuPanel();
    }).catch(
    error => console.log('error is', error)
);

// Load Footer
fetch("./assets/component/footer.html").then(
    response => {
        return response.text()
    }).then(
    data => {
        document.querySelector("sr-footer").innerHTML = data;
    }).catch(
    error => console.log('error is', error)
);

//  ----- Load Component Ends -------//

//  ----- Headear Section  -------//
function flexMenu() {
    //Flexnav Menu
    $(".flexnav").flexNav({
        'animationSpeed': 0
    });

    // Header Menu
    $('.menu-button').on('click', function () {
        $('.menu-button').toggleClass('menu-open menu-close');
    });

    if (screen.width < 1024) {
        $('.menubar .flexnav').removeClass('flexnav-show');
    }
}

// Show & Hide Contact Panel 
function ContactSideMenuPanel() {
    var mainWrapper = $('.main-wrapper'),
        contactBtnOpener = $('.contact-side-menu-opener'),
        contactBtnCloser = $('.sr-contact-side-menu-closer'),
        open = 'sr-contact-side-menu-opened';

    mainWrapper.prepend('<div class="sr-cover"/>');

    var n = function () {
            $(document.body).removeClass(open), contactBtnOpener.removeClass("opened");
        },
        d = function () {
            $(document.body).addClass(open), contactBtnOpener.addClass("opened"),
                $('.main-wrapper .sr-cover').on('click', function () {
                    $(document.body).removeClass(open), contactBtnOpener.removeClass("opened");
                });

            var lastScrollTop = 0;
            $(window).scroll(function () {
                Math.abs(lastScrollTop - $(window).scrollTop()) > 400 && n()
            });
        };

    contactBtnOpener.on('click', function () {
        event.preventDefault(), contactBtnOpener.hasClass("opened") || d()
    }), contactBtnCloser.on('click', function () {
        event.preventDefault(), contactBtnOpener.hasClass("opened") && n()
    });
}

//Hide Show Header on Scroll
function HideShowHeader() {
    var didScroll;
    var lastScrollTop = 0;
    var delta = 50;
    var navbarHeight = 75;
    var navbarHideAfter = navbarHeight

    $(window).scroll(function (event) {
        didScroll = true;
    });

    if ($('.scroll-hide').length > 0) {
        setInterval(function () {
            if (didScroll) {
                hasScrolled();
                didScroll = false;
            }
        }, 100);
    }
    return false;

    function hasScrolled() {
        var st = $(this).scrollTop();

        if (Math.abs(lastScrollTop - st) <= delta)
            return;

        if (st > lastScrollTop && st > navbarHideAfter) {
            if ($('.scroll-hide').length > 0) {
                $('header').addClass('hide');
            }
        } else {
            if ($('.scroll-hide').length > 0) {
                if (st + $(window).height() < $(document).height()) {
                    $('header').removeClass('hide');
                    $('#header.transparent').addClass('white-bg');
                }
            }

            if ($(window).scrollTop() < 300) {
                $('#header.transparent').removeClass('white-bg');
            }
        }
        lastScrollTop = st;
    }
}

//Header Section Fade
function HeaderSection() {
    var headerSection = document.getElementById('header');
    var windowScrolled;

    window.addEventListener('scroll', function windowScroll() {
        windowScrolled = window.pageYOffset || document.documentElement.scrollTop;
        headerSection.style.opacity = (1 - (windowScrolled / 10) / 10);
    });
}

//  ----- Headear Section Ends -------//


// Portfolio Filter 
$(window).on('load', function () {
    //Portfolio masonry
    var $container = $('#portfolio-container');
    $container.isotope({
        masonry: {
            columnWidth: '.portfolio-item'
        },
        itemSelector: '.portfolio-item'
    });
    $('#filters').on('click', 'li', function () {
        $('#filters li').removeClass('active');
        $(this).addClass('active');
        var filterValue = $(this).attr('data-filter');
        $container.isotope({
            filter: filterValue
        });
    });
});

//Magnific Pop Up
$('.gallery').each(function () { // the containers for all your galleries
    $(this).magnificPopup({
        delegate: 'a', // the selector for gallery item
        type: 'image',
        gallery: {
            enabled: true
        }
    });
});


//Back To Top
function BackToTop() {
    $('.scrolltotop').on('click', function () {
        $('html, body').animate({
            scrollTop: 0
        }, 800);
        return false;
    });

    $(document).scroll(function () {
        var y = $(this).scrollTop();
        if (y > 600) {
            $('.scrolltotop').fadeIn();
        } else {
            $('.scrolltotop').fadeOut();
        }
    });
}

// $('img').bind('contextmenu', function (e) {
//     return false;
// });

// poster frame click event
$(document).on('click', '.js-videoPoster', function (ev) {
    ev.preventDefault();
    var $poster = $(this);
    var $wrapper = $poster.closest('.js-videoWrapper');
    videoPlay($wrapper);
});

// play the targeted video (and hide the poster frame)
function videoPlay($wrapper) {
    var $iframe = $wrapper.find('.js-videoIframe');
    var src = $iframe.data('src');
    // hide poster
    $wrapper.addClass('videoWrapperActive');
    // add iframe src in, starting the video
    $iframe.attr('src', src);
}