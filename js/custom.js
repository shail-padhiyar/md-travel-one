$(window).scroll(function () {
    var sc = $(window).scrollTop()
    if (sc > 30) {
        $(".header-section").addClass("scroll")
    } else {
        $(".header-section").removeClass("scroll")
    }
});


let items = document.querySelectorAll('.card-slider-section .carousel .carousel-item')

items.forEach((el) => {
    const minPerSlide = 4
    let next = el.nextElementSibling
    for (var i = 1; i < minPerSlide; i++) {
        if (!next) {
            // wrap carousel by using first child
            next = items[0]
        }
        let cloneChild = next.cloneNode(true)
        el.appendChild(cloneChild.children[0])
        next = next.nextElementSibling
    }
})

var destinationCarousel = document.querySelector('#destinationCarousel, #heroCarousel')
var carousel = new bootstrap.Carousel(destinationCarousel, {
  interval: 3000
})

$(window).scroll(function () {
    var scrollPos = $(window).scrollTop();

    // Loop through each section
    $('.scroll-section').each(function () {
        var sectionOffset = $(this).offset().top - 121;

        // Check if the section is in the viewport
        if (scrollPos >= sectionOffset) {
            // Remove the "active" class from all sections
            $('.scroll-section').removeClass('active');

            // Add the "active" class to the current section
            $(this).addClass('active');
        }
    });



    if ($(".hero-section").hasClass("active")) {
        $(".navbar-nav .nav-item.home .nav-link").addClass("active");
        $(".navbar-nav .nav-item.about .nav-link").removeClass("active");
        $(".navbar-nav .nav-item.destinations .nav-link").removeClass("active");
    }
    else if ($(".about-us-section").hasClass("active")) {
        $(".navbar-nav .nav-item.about .nav-link").addClass("active");
        $(".navbar-nav .nav-item.home .nav-link").removeClass("active");
        $(".navbar-nav .nav-item.destinations .nav-link").removeClass("active");
    }
    else if ($(".explore-section").hasClass("active")) {
        $(".navbar-nav .nav-item.destinations .nav-link").addClass("active");
        $(".navbar-nav .nav-item.about .nav-link").removeClass("active");
        $(".navbar-nav .nav-item.home .nav-link").removeClass("active");
    }
});

