$(document).ready(function () {

    /* For the sticky navigation */
    $('.js--section-rules').waypoint(function (direction) {
        if (direction == "down") {
            $('nav').addClass('sticky');
        } else {
            $('nav').removeClass('sticky');
        }
    }, {
        offset: '60px;'
    });

    /* Scroll on buttons*/
    $('.js--scroll-to-register').click(function () {
        $('html, body').animate({
            scrollTop: $('.js--section-register').offset().top
        }, 1000);
    });

    /* Navigation scroll */
    $(function () {
        $('a[href*=#]:not([href=#])').click(function () {
            if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                if (target.length) {
                    $('html,body').animate({
                        scrollTop: target.offset().top
                    }, 1000);
                    return false;
                }
            }
        });
    });

    /*Movile Nav*/

    $('js--nav-icon').click(function () {
        var nav = $('.js--main-nav');
        var icon=$('js--nav-icon i');

        nav.slideToggle(200);
        if(icon.hasClass(''))
    });

});
