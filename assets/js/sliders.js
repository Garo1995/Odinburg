
let businessSwiper = new Swiper(".business-slider", {
    slidesPerView: 1,
    spaceBetween: 10,
    loop: true,
    speed: 800,
    pagination: {
        el: ".business-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".business-button-next",
        prevEl: ".business-button-prev",
    },
});





let mortgageSwiper = new Swiper(".mortgage-slider", {
    slidesPerView: 3,
    spaceBetween: 16,
    breakpoints: {
        1599: {
            slidesPerView: 3,
            slidesPerGroup: 1,
            spaceBetween: 16,
        },
        1199: {
            slidesPerView: 3,
            slidesPerGroup: 1,
            spaceBetween: 20,
        },

        320: {
            slidesPerView: 2,
            slidesPerGroup: 1,
            spaceBetween: 10,
        },
    },
    pagination: {
        el: ".profe-pagination",
        type: "fraction",
    },
    navigation: {
        nextEl: ".mortgage-button-next",
        prevEl: ".mortgage-button-prev",
    },
});




let apartmentsSwiper = new Swiper(".apartments-slider", {
    slidesPerView: 4,
    spaceBetween: 24,
    loop: true,
    breakpoints: {
        1020: {
            slidesPerView: 4,
            slidesPerGroup: 1,
            spaceBetween: 24,
        },

        767: {
            slidesPerView: 3,
            slidesPerGroup: 1,
            spaceBetween: 20,
        },
        320: {
            slidesPerView: 3,
            slidesPerGroup: 1,
            spaceBetween: 10,
        },
    },

    navigation: {
        nextEl: ".apartments-next",
        prevEl: ".apartments-prev",
    },
});







let projectSwiper = new Swiper(".project-slider", {
    slidesPerView: 4,
    spaceBetween: 24,
    loop: true,
    breakpoints: {
        1299: {
            slidesPerView: 4,
            slidesPerGroup: 1,
            spaceBetween: 24,
        },
        1020: {
            slidesPerView: 3,
            slidesPerGroup: 1,
            spaceBetween: 20,
        },
        767: {
            slidesPerView: 2,
            slidesPerGroup: 1,
            spaceBetween: 16,
        },
        320: {
            slidesPerView: 3,
            slidesPerGroup: 1,
            spaceBetween: 16,
        },
    },

    navigation: {
        nextEl: ".project-next",
        prevEl: ".project-prev",
    },
});



let programsSwiper = new Swiper(".programs-slider", {
    slidesPerView: 4,
    spaceBetween: 24,
    breakpoints: {
        1299: {
            slidesPerView: 4,
            slidesPerGroup: 1,
            spaceBetween: 24,
        },

        320: {
            slidesPerView: 4,
            slidesPerGroup: 1,
            spaceBetween: 20,
            loop: true,
        },
    },

});


let optionsSwiper = new Swiper(".finish-options-slider", {
    slidesPerView: 3,
    spaceBetween: 24,
    pagination: {
        el: ".finish-pagination",
        clickable: true,
    },
    breakpoints: {
        1399: {
            slidesPerView: 3,
            slidesPerGroup: 1,
            spaceBetween: 24,
        },
        1199: {
            slidesPerView: 3,
            slidesPerGroup: 1,
            spaceBetween: 20,
        },
        767: {
            slidesPerView: 2,
            slidesPerGroup: 1,
            spaceBetween: 20,
        },
        320: {
            slidesPerView: 1,
            slidesPerGroup: 1,
            spaceBetween: 10,
        },
    },

});




let optionsGallerySwiper = new Swiper(".options-gallery-slide", {
    slidesPerView: 1,
    spaceBetween: 24,
    loop: true,
    navigation: {
        nextEl: ".options-button-next",
        prevEl: ".options-button-prev",
    },
});



let constructionSwiper = new Swiper(".construction-slider", {
    slidesPerView: 2,
    spaceBetween: 24,
    loop: true,
    navigation: {
        nextEl: ".construction-next",
        prevEl: ".construction-prev",
    },
    breakpoints: {
        767: {
            slidesPerView: 2,
            slidesPerGroup: 1,
            spaceBetween: 20,
        },
        320: {
            slidesPerView: 2,
            slidesPerGroup: 1,
            spaceBetween: 16,
        },
    },
});






let gallerySwiper = new Swiper(".gallery-slider", {
    slidesPerView: 4,
    spaceBetween: 16,
    breakpoints: {
        1299: {
            slidesPerView: 4,
            spaceBetween: 16,
            slidesPerGroup: 1,
        },
        320: {
            slidesPerView: 4,
            spaceBetween: 16,
            slidesPerGroup: 1,
            loop: true,
        },
    },
});



let newsSwiper = new Swiper(".news-slider", {
    slidesPerView: 4,
    spaceBetween: 24,
    breakpoints: {
        1299: {
            slidesPerView: 4,
            spaceBetween: 16,
            slidesPerGroup: 1,
        },
        320: {
            slidesPerView: 4,
            spaceBetween: 16,
            slidesPerGroup: 1,
            loop: true,
        },
    },
});








let architectureSwiper = new Swiper(".architecture-swiper", {
    slidesPerView: 1,
    spaceBetween: 10,
    loop: true,
    navigation: {
        nextEl: ".archit-button-next",
        prevEl: ".archit-button-prev",
    },
});

let architectureTwoSwiper = new Swiper(".architecture-two-swiper", {
    slidesPerView: 1,
    spaceBetween: 10,
    loop: true,
    navigation: {
        nextEl: ".archit-two-button-next",
        prevEl: ".archit-two-button-prev",
    },
});





let galleryModSwiper = new Swiper(".gallery-modal-slider", {
    slidesPerView: 1,
    spaceBetween: 10,
    loop: true,
    navigation: {
        nextEl: ".gallery-button-next",
        prevEl: ".gallery-button-prev",
    },
});









