

const menuToggle = document.querySelector('.header-toggle')
const menuHeader = document.querySelector('.header-menu')
const expand = 'is-expand'
menuToggle.addEventListener('click', function () {
    menuHeader.classList.add(expand)
})
window.addEventListener('click', function (e) {
    if (!e.target.matches('.header-toggle') && (!menuHeader.contains(e.target))) {
        menuHeader.classList.remove(expand)
    }
})


$(document).ready(function () {
    $(".quote-container").slick({
        prevArrow:
            "<button type='button' class='slick-prev pull-left'><i class='fal fa-angle-left quote-arrow' aria-hidden='true'></i></button>",
        nextArrow:
            "<button type='button' class='slick-next pull-right'><i class='fal fa-angle-right quote-arrow' aria-hidden='true'></i></button>",
        responsive: [
            {
                breakpoint: 767,
                settings: {
                    arrows: true,
                },
            },
        ],
    });
});