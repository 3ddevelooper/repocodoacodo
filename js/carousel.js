$(".slider").owlCarousel({
    margin: 10,
    loop: true,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,

    responsive: {
        0: {
            items: 1,
            nav: false
        },
        400: {
            items: 1,
            nav: false
        },
        500: {
            items: 2,
            nav: false
        },
        600: {
            items: 3,
            nav: false
        },
        1000: {
            items: 3,
            nav: false
        },
        1200: {
            items: 3,
            nav: false
        },
        1300: {
            items: 4,
            nav: false
        },

    }


});