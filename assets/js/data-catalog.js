







$(document).ready(function () {

    addActiveClass('menu-data-menu', 'menu-data-active');
    changeCaseBlock(this, 'menu-data-menu', 'menu-modal-min', 'menu-data-active', 'menu-data-click');
    $('.menu-data-click').on('click', function () {
        changeActiveClassWithClick(this, 'menu-data-menu', 'menu-data-active')
        changeCaseBlock(this, 'menu-data-menu', 'menu-modal-min', 'menu-data-active', 'menu-data-click');
    })

    addActiveClass('real-estate-menu', 'real-estate-active');
    changeCaseBlock(this, 'real-estate-menu', 'real-estate-min', 'real-estate-active', 'real-estate-click');
    $('.real-estate-click').on('click', function () {
        changeActiveClassWithClick(this, 'real-estate-menu', 'real-estate-active')
        changeCaseBlock(this, 'real-estate-menu', 'real-estate-min', 'real-estate-active', 'real-estate-click');
    })


    addActiveClass('real-estate-filter', 'params-active');
    changeCaseBlock(this, 'real-estate-filter', 'estate-filter-min', 'params-active', 'select-params');
    $('.select-params').on('click', function () {
        changeActiveClassWithClick(this, 'real-estate-filter', 'params-active')
        changeCaseBlock(this, 'real-estate-filter', 'estate-filter-min', 'params-active', 'select-params');
    })



    addActiveClass('weather-href', 'active-weather');
    changeCaseBlock(this, 'weather-href', 'construct-min', 'active-weather', 'weather-click');
    $('.weather-click').on('click', function () {
        changeActiveClassWithClick(this, 'weather-href', 'active-weather')
        changeCaseBlock(this, 'weather-href', 'construct-min', 'active-weather', 'weather-click');
    })





    function addActiveClass(parent_menu, active_class) {
        let prt = $('.' + parent_menu);
        let prt_childrens = $(prt).children();
        let prt_child_li = $(prt_childrens).children();
        let first_child = $(prt_child_li)[0]
        if (!$(first_child).hasClass(active_class)) {
            !$(first_child).addClass(active_class)
        }
    }
    function changeActiveClassWithClick($this, parent_block, active_class) {
        let prt = $($this).parents('.' + parent_block);
        let prt_child = $(prt).find('li');
        $(prt_child).each(function () {
            $(this).removeClass(active_class);
        })
        $($this).addClass(active_class);
    }
    function changeCaseBlock($this, case_menu, case_block, active_class, menu_link) {
        let case_menu_block = $('.' + case_menu);
        let case_block_sub = $('.' + case_block);
        let case_block_child = $(case_block_sub).children();
        $(case_block_child).each(function () {
            case_block_child.removeClass('active-cat');
        })
        if ($($this).hasClass(menu_link)) {
            let this_attr = $($this).attr('data-catalog');
            $(case_block_child).each(function () {
                if ($(this).attr('data-catalog') == this_attr) {
                    $(this).addClass('active-cat');

                }
            })
        } else {
            let active_find = $(case_menu_block).find('.' + active_class);
            let active_find_attr = $(active_find).attr('data-catalog');
            $(case_block_child).each(function () {
                if ($(this).attr('data-catalog') == active_find_attr) {
                    $(this).addClass('active-cat');
                }
            })
        }
    }
});





