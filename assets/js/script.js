$(document).ready(function () {
    $('select').styler();


    $('.open-menu').on('click', function (e) {
        $(this).toggleClass('close-menu')
        $('.menu-modal').toggleClass('menu-modal-opened')
    })
    $('.menu-data-link ul li a').on('click', function (e) {
        $('.open-menu').removeClass('close-menu')
        $('.menu-modal').removeClass('menu-modal-opened')
    })

    window.addEventListener('scroll', function() {
        const headerNav = document.querySelector('.header-nav');
        if (window.scrollY > 100) {
            headerNav.classList.add('show');
        } else {
            headerNav.classList.remove('show');
        }
    });

    $(document).ready(function () {
        setTimeout(function () {
            $(".banner-anime").addClass("start-anime");
            $("header").addClass("header-anime");
        }, 900);
    });
})


const revealOnScroll = () => {
    const elementsToReveal = document.querySelectorAll('.animate-on-scroll');
    const triggerPoint = window.innerHeight * 0.85;

    elementsToReveal.forEach((element) => {
        const elementTop = element.getBoundingClientRect().top;

        if (elementTop < triggerPoint) {
            element.classList.add('visible');
        }
    });
};

// 🔄 Attach listeners
window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);




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
    e.preventDefault();

    const parent = $(this).closest('.bank-card-box'); // родитель
    const drop = parent.find('.bank-card-drop'); // скрытый блок

    // переключаем класс родителя
    parent.toggleClass('bank-card-opened');

    // плавное открытие / закрытие через max-height
    if (parent.hasClass('bank-card-opened')) {
        drop.stop().slideDown(300);
    } else {
        drop.stop().slideUp(300);
    }
});










$('.menu-scroll a').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'')
        && location.hostname == this.hostname) {
        let $target = $(this.hash);
        $target = $target.length && $target
            || $('[name=' + this.hash.slice(1) +']');
        if ($target.length) {
            let targetOffset = $target.offset().top-130;
            $('html,body')
                .animate({scrollTop: targetOffset}, 1000);
            return false;
        }
    }
});








$('.open-2025').on('click', function () {
    $(this).addClass('active-year');
    $('.open-2024').removeClass('active-year');
    $('.construct-2024').removeClass('construct-opened');
    $('.construct-2025').addClass('construct-opened');
});

$('.open-2024').on('click', function () {
    $(this).addClass('active-year');
    $('.open-2025').removeClass('active-year');
    $('.construct-2024').addClass('construct-opened');
    $('.construct-2025').removeClass('construct-opened');
});




$('.number-rooms ul li').on('click', function () {
    $(this).toggleClass('number-rooms-act');
})



$('.filter-finishing-box ul li').on('click', function () {
    $('.filter-finishing-box ul li').removeClass('finishing-act');
    $(this).addClass('finishing-act');
})




$('.nav-menu ul li').on('click', function () {
    $('.nav-menu ul li').removeClass('nav-menu-active');
    $(this).addClass('nav-menu-active');
})


$('.select-filter-name').on('click', function () {
    $(this).addClass('filter-name-remove');
})







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



















// пересчитываем, когда открывается модалка
document.querySelectorAll('.modal-overlay').forEach(modal => {
    const observer = new MutationObserver(() => {
        if (modal.classList.contains('active')) {
            // пересчёт только для полосок внутри этого окна
            modal.querySelectorAll('.pill-strip').forEach(strip => {
                if (typeof strip.updatePills === 'function') strip.updatePills();
            });
        }
    });
    observer.observe(modal, { attributes: true, attributeFilter: ['class'] });
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




$('.real-estate-menu ul li').on('click', function () {
    $('.selection-parameters').removeClass('touchstart-open');
    $('body').removeClass('body-fon');
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
    $('.modal-overlay').removeClass('active');

})


$('.master-plan-sel ul li').on('click', function () {
    $('.master-plan-sel ul li').removeClass('plan-active')
    $(this).addClass('plan-active');


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
        $('body').removeClass('body-fon modal-open');
        $('.modal-overlay').removeClass('active');
        $('.select-property').removeClass('select-property-open');
    }
});



$('.close-catalog').on('click', function () {
    $('.touchstart').removeClass('touchstart-open')
    $('body').removeClass('body-fon ');

})





document.addEventListener('DOMContentLoaded', function () {
    const widget = document.querySelector('.floating-widget');

    widget.addEventListener('mouseenter', function () {
        widget.classList.add('open');
    });

    widget.addEventListener('mouseleave', function () {
        widget.classList.remove('open');
    });
});

















document.querySelectorAll('.validate-form').forEach(form => {

    const submitBtn = form.querySelector('.btn-submit');

    function checkValidity() {
        let isValid = true;

        // Телефон
        form.querySelectorAll('.required-phone').forEach(phone => {
            if (phone.value.trim().length < 6) isValid = false;
        });

        // Email
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        form.querySelectorAll('.required-email').forEach(email => {
            if (!emailPattern.test(email.value.trim())) isValid = false;
        });

        // Чекбоксы
        form.querySelectorAll('.required-check').forEach(ch => {
            if (!ch.checked) isValid = false;
        });

        // Активируем / блокируем кнопку
        if (isValid) {
            submitBtn.classList.remove('disabled');
            submitBtn.removeAttribute('disabled');
        } else {
            submitBtn.classList.add('disabled');
            submitBtn.setAttribute('disabled', true);
        }
    }

    // Слушаем изменения
    form.addEventListener('input', checkValidity);
    form.addEventListener('change', checkValidity);

});