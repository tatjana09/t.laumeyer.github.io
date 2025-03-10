$(window).on("load", function () {
    $(".loader .inner").fadeOut(750, function () {
        $(".loader").fadeOut(750);
    });
});

$(document).ready(function () {

    $('#slides').superslides({
        animation: 'fade',
        play: 4000,
        pagination: false,
    });

    var typed = new Typed(".typed", {
        strings: ["Software Development.", "Media informatics.", "Information science."],
        typeSpeed: 60,
        loop: true,
        startDelay: 1500,
        showCursor: false,
    });



    $('.owl-carousel').owlCarousel({
        autoplay: true,
        autoplayTimeout: 3000,
        goToFirst: false,
        loop: true,
        items: 4,
        responsive: {
            0: {
                items: 1
            },
            480: {
                items: 2
            },
            768: {
                items: 3
            },
            938: {
                items: 4
            }
        }
    });



    var skillsTopOffset = $(".skillsSection").offset().top;
    var statsTopOffset = $(".statsSection").offset().top;
    var contactTopOffset = $(".contactSection").offset().top;
    var countUpFinished = false;
    var typingFinished = false;

    $(window).scroll(function () {


        if (window.pageYOffset > skillsTopOffset - $(window).height() + 200) {

            $('.chart').easyPieChart({
                easing: 'easeInOut',
                barColor: '#fff',
                trackColor: false,
                scaleColor: false,
                lineWidth: 4,
                size: 152,
                onStep: function (from, to, percent) {
                    $(this.el).find('.percent').text(Math.round(percent));
                }
            });

        }

        if (!countUpFinished && window.pageYOffset > statsTopOffset - $(window).height() + 200) {

            $('.counter').each(function () {
                var element = $(this);
                var endVal = parseInt(element.text());

                element.countup(endVal);

            });

            countUpFinished = true;

        }

        if (!typingFinished && window.pageYOffset > contactTopOffset - $(window).height() + 200) {

            var typedContact = new Typed(".contactTyped", {
                strings: ["I would love to hear from you!"],
                typeSpeed: 100,
                loop: false,
                startDelay: 500,
                showCursor: false,
            });

            typingFinished = true;

        }
    });

    $("#navigation li a").click(function (e) {
        e.preventDefault();

        var targetElement = $(this).attr("href");
        var targetPosition = $(targetElement).offset().top;
        $("html, body").animate({ scrollTop: targetPosition - 50 }, "slow");

    });

    const nav = $("#navigation");
    const navTop = nav.offset().top;

    $(window).on("scroll", stickyNavigation);

    function stickyNavigation() {

        var body = $("body");
        if ($(window).scrollTop() >= navTop) {
            body.css("padding-top", nav.outerHeight() + "px");
            body.addClass("fixedNav");
        }
        else {
            body.css("padding-top", 0);
            body.removeClass("fixedNav");
        }

    };





});