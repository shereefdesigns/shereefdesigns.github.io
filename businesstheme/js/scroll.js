$(document).ready(function () {
    // Add scrollspy to <body>
    $('body').scrollspy({
        target: ".navbar",
        offset: 50
    });

    // Add smooth scrolling on all links inside the navbar
    $("#myNavbar a").on('click', function (event) {

        // Prevent default anchor click behavior
        event.preventDefault();

        // Store hash
        var hash = this.hash;

        // Using jQuery's animate() method to add smooth page scroll
        // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
        $('html, body').animate({
            scrollTop: $(hash).offset().top
        }, 1200, function () {

            // Add hash (#) to URL when done scrolling (default click behavior)
            window.location.hash = hash;
        });
    });
    
    // jQuery function controlling the behavior of collapsed navbar starts
    $(document).on('click', '.navbar-collapse.in', function (e) {
        if ($(e.target).is('a')) {
            $(this).collapse('hide');
            $(".navbar-toggle").removeClass("active");
        }
    });
    $(document).click(function (event) {
        var clickover = $(event.target);
        var $navbar = $(".navbar-collapse");
        var _opened = $navbar.hasClass("in");
        if (_opened === true && !clickover.hasClass("navbar-toggle")) {
            $navbar.collapse('hide');
            $(".navbar-toggle").removeClass("active");
        }
    });
    // jQuery function controlling the behavior of collapsed navbar ends
    
    
    // jQuery function ensuring full screen carousel starts
    var nav_height = $(".navbar").height();
    $(".carousel").css("margin-top", nav_height);
    $(window).on('resize scoll', (function () {
        var nav_height = $(".navbar").height();
        $(".carousel").css("margin-top", nav_height);
    }));

    $(".navbar-toggle").on("click", function () {
        $(this).toggleClass("active");
    });
    $('.carousel').carousel({
        interval: 6000,
        pause: "false"
    });
    var $item = $('.carousel .item');
    var $wHeight = $(window).height();

    $item.height($wHeight - nav_height);
    $item.addClass('full-screen');

    $('.carousel img').each(function () {
        var $src = $(this).attr('src');
        var $color = $(this).attr('data-color');
        $(this).parent().css({
            'background-image': 'url(' + $src + ')',
            'background-color': $color
        });
        $(this).remove();
    });

    $(window).on('resize', function () {
        $wHeight = $(window).height();
        $item.height($wHeight - nav_height);
    });
    // jQuery function ensuring full screen carousel ends

    
    // jQuery function controlling back to top operation satrts
    var offset = 220;
    var duration = 500;
    jQuery(window).scroll(function() {
        if (jQuery(this).scrollTop() > offset) {
            jQuery('.back-to-top').fadeIn(duration);
        } else {
            jQuery('.back-to-top').fadeOut(duration);
        }
    });
    
    jQuery('.back-to-top').click(function(event) {
        event.preventDefault();
        jQuery('html, body').animate({scrollTop: 0}, duration);
        return false;
    })
    // jQuery function controlling back to top operation ends
    
    // $fn.scrollSpeed(step, speed, easing);
    jQuery.scrollSpeed(100, 800);

});