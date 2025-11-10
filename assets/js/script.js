$(document).ready(function () {
    $('select').styler();
})



$('.open-menu').on('click', function (e) {
    $(this).toggleClass('close-menu')
    $('.menu-modal').toggleClass('menu-modal-opened')
})

window.addEventListener('scroll', function() {
    const headerNav = document.querySelector('.header-nav');
    if (window.scrollY > 100) {
        headerNav.classList.add('show');
    } else {
        headerNav.classList.remove('show');
    }
});




$('.select-name').on('click', function (e) {
    $(this).parent().toggleClass('select-property-open');
    e.stopPropagation();
});

$('.select-dropdown ul li').on('click', function () {
    let selected_text = $(this).html();
    $('.select-name').html(selected_text);
    $('.select-property').removeClass('select-property-open')
});
$(window).on('click', function (e) {
    let menuSort = $('.select-property');
    if (e.target !== menuSort) {
        menuSort.removeClass('select-property-open');
    }
});







$('.open-bank-card').on('click', function (e) {
    $('.bank-card-box').toggleClass('bank-card-opened')
})











$('.number-rooms ul li').on('click', function () {
    $('.number-rooms ul li').removeClass('number-rooms-act');
    $(this).addClass('number-rooms-act');
})



$('.filter-finishing-box ul li').on('click', function () {
    $('.filter-finishing-box ul li').removeClass('finishing-act');
    $(this).addClass('finishing-act');
})




$('.open_modal').on('click', function () {
    let attr = $(this).attr('data-val');
    let modal = $('#' + attr);
    modal.removeClass('out');
    modal.fadeIn();
    $('body').addClass('body_fix');
});

$('.close').on('click', function () {

    $('body').removeClass('body_fix');
    let prt = $(this).parents('.modal');

    prt.addClass('out')
    setTimeout(function () {
        prt.fadeOut();
    }, 100);
});

$(window).on('click', function (event) {
    $('.modal').each(function () {
        let gtattr = $(this).attr('id');
        let new_mod = $('#' + gtattr);
        let md_cnt = $(new_mod).find('.modal-content');
        if (event.target === $(md_cnt)[0]) {
            setTimeout(function () {
                $(new_mod).addClass('out');
                $(new_mod).fadeOut()
            }, 100)
            $('body').removeClass('body_fix');
        }
        if (event.target === this) {
            setTimeout(function () {
                $(new_mod).addClass('out');
                $(new_mod).fadeOut()
            }, 100)
        }
    })
});












document.addEventListener("DOMContentLoaded", () => {
    const cookieBlock = document.querySelector(".cookie");
    const acceptBtn = document.querySelector(".cookie__btn");

    // Показываем баннер, если не было принятия
    if (!localStorage.getItem("cookieAccepted")) {
        cookieBlock.style.display = "flex";
    } else {
        cookieBlock.style.display = "none";
    }

    // При нажатии — скрываем и сохраняем в localStorage
    acceptBtn.addEventListener("click", () => {
        localStorage.setItem("cookieAccepted", "true");
        cookieBlock.style.display = "none";
    });
});








let sliders = document.getElementsByClassName('nonlinear');
for (let i = 0; i < sliders.length; i++) {
    let slid = sliders[i];
    noUiSlider.create(slid, {
        connect: true,
        behaviour: 'tap',
        start: [document.getElementById(slid.getAttribute('data-id') + '-lower-value').value, document.getElementById(slid.getAttribute('data-id') + '-upper-value').value],
        range: {
            'min': [parseInt(slid.getAttribute('data-min'))],
            'max': [parseInt(slid.getAttribute('data-max'))]
        },
    });
    document.getElementById(slid.getAttribute('data-id') + '-lower-value').addEventListener('change', function () {
        sliders[this.getAttribute('data-index')].noUiSlider.set([this.value, null]);
    });
    document.getElementById(slid.getAttribute('data-id') + '-upper-value').addEventListener('change', function () {
        sliders[this.getAttribute('data-index')].noUiSlider.set([null, this.value]);

    });
    slid.noUiSlider.on('slide', function (values, handle, unencoded, isTap, positions) {
        var nodes = [
            document.getElementById(this.target.getAttribute('data-id') + '-lower-value'), // 0
            document.getElementById(this.target.getAttribute('data-id') + '-upper-value'),  // 1
        ];
        nodes[handle].value = parseInt(values[handle]);
    });
    slid.noUiSlider.on('end', function (values, handle, unencoded, isTap, positions) {
        let data = $('form').serializeArray();
    });
}


















document.querySelectorAll('.news-box').forEach(box => {
    box.addEventListener('click', () => {
        const title = box.querySelector('h3').textContent;
        const date = box.querySelector('span').textContent;
        const text = box.querySelector('p').textContent;
        const imgSrc = box.querySelector('img').getAttribute('src');

        const modal = document.querySelector('.modal-news-info');
        modal.querySelector('img').setAttribute('src', imgSrc);
        modal.querySelector('h3').textContent = title;
        modal.querySelector('span').textContent = date;
        modal.querySelector('p').textContent = text;
    });
});















// Свайп вниз — закрыть
let startY = 0;
let endY = 0;
let threshold = 50;


$('.open-filter-calc').on('click', function () {
    $('.calculator-program').addClass('touchstart-open');
    $('body').addClass('body-fon');
})








$('.map-all-object').on('click', function () {
    $('.infrast-map-cnt').addClass('touchstart-open');
    $('body').addClass('body-fon');
})



$('.open-estate-filter').on('click', function () {
    $('.selection-parameters').addClass('touchstart-open');
    $('body').addClass('body-fon');
})







$('.close-filt-map').on('click', function () {
    $('.calculator-program').removeClass('touchstart-open');
    $('body').removeClass('body-fon');
    $('.infrast-map-cnt').removeClass('touchstart-open');

    $('.selection-parameters').removeClass('touchstart-open');

})




$('.touchstart').on('touchstart', function (e) {
    startY = e.originalEvent.touches[0].clientY;
});

$('.touchstart').on('touchmove', function (e) {
    endY = e.originalEvent.touches[0].clientY;
});

$('.touchstart').on('touchend', function () {
    if (endY - startY > threshold) {
        $(this).removeClass('touchstart-open');
        $('body').removeClass('body-fon');
    }
});








